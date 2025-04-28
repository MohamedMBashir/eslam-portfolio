"use client";

import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

// Define the Props for the Page component
interface PageProps {
  pageNumber: number;
  width: number;
  height: number;
}

// Create a Page component to be used inside the book
const Page = React.forwardRef<HTMLDivElement, PageProps>(({ pageNumber, width, height }, ref) => {
  return (
    <div 
      className="relative overflow-hidden rounded shadow-md bg-white" 
      ref={ref}
      style={{ width, height }}
    >
      <Image
        src={`/portfolio/page-${pageNumber.toString().padStart(2, '0')}.jpg`}
        alt={`Portfolio page ${pageNumber}`}
        fill
        style={{ objectFit: "cover" }}
        priority={pageNumber <= 2}
      />
      <div className="absolute bottom-2 right-2 text-xs text-gray-600 bg-white/70 px-2 py-1 rounded">
        {pageNumber}
      </div>
    </div>
  );
});

Page.displayName = "Page";

// Define the type for the pageFlip object
interface PageFlip {
  flipPrev: (corner?: 'top' | 'bottom') => void;
  flipNext: (corner?: 'top' | 'bottom') => void;
  getCurrentPageIndex: () => number;
}

const PortfolioBook = () => {
  const { t } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(0);
  const [totalPages, setTotalPages] = useState(26); // We know we have 26 pages
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef<{ pageFlip: () => PageFlip } | null>(null);
  
  // Calculate dimensions based on window size
  const getBookDimensions = () => {
    // For a book with two pages side by side, each page should be more narrow
    // We'll use a 1:1.414 aspect ratio (A4) for each individual page
    
    // For larger screens, determine width based on available space
    let singlePageWidth = Math.min(400, windowWidth * 0.45);
    let height = singlePageWidth * 1.414; // A4 page proportion
    
    // Adjust for smaller screens - switch to a more constrained view
    if (windowWidth < 768) {
      singlePageWidth = Math.min(320, windowWidth * 0.45);
      height = singlePageWidth * 1.414;
    }
    
    // For very small screens, go even more compact
    if (windowWidth < 640) {
      singlePageWidth = windowWidth * 0.45;
      height = singlePageWidth * 1.414;
    }
    
    return { width: singlePageWidth, height };
  };
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const { width, height } = getBookDimensions();
  
  // Create an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Handle page flip
  const handlePageFlip = () => {
    if (bookRef.current) {
      const currentPageIndex = bookRef.current.pageFlip().getCurrentPageIndex();
      setCurrentPage(currentPageIndex);
    }
  };
  
  return (
    <section id="portfolio-book" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">{t("portfolio")}</h2>
          
          <div className="flex justify-center mb-8">
            <div className="relative book-container" style={{ 
              width: width * 2, 
              height, 
              maxWidth: '100%',
              margin: '0 auto'
            }}>
              {windowWidth > 0 && (
                <HTMLFlipBook
                  width={width}
                  height={height}
                  size="stretch"
                  minWidth={width * 0.5}
                  maxWidth={width * 1.5}
                  minHeight={height * 0.5}
                  maxHeight={height * 1.5}
                  maxShadowOpacity={0.5}
                  showCover={true}
                  mobileScrollSupport={true}
                  flippingTime={1000}
                  drawShadow={true}
                  usePortrait={false} // Set to false to enforce two-page spread
                  startZIndex={0}
                  autoSize={true}
                  clickEventForward={true}
                  useMouseEvents={true}
                  swipeDistance={30}
                  startPage={0}
                  style={{}}
                  renderOnlyPageLengthChange={false}
                  showPageCorners={true}
                  disableFlipByClick={false}
                  onFlip={handlePageFlip}
                  ref={bookRef as any}
                  className="portfolio-book"
                >
                  {pageNumbers.map((pageNumber) => (
                    <Page 
                      key={pageNumber}
                      pageNumber={pageNumber}
                      width={width}
                      height={height}
                    />
                  ))}
                </HTMLFlipBook>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-center mt-8">
            <div className="text-sm text-gray-600 mb-4">
              Page {currentPage + 1} of {totalPages}
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => bookRef.current?.pageFlip().flipPrev()}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                aria-label="Previous page"
                disabled={currentPage === 0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={() => bookRef.current?.pageFlip().flipNext()}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                aria-label="Next page"
                disabled={currentPage >= totalPages - 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioBook; 