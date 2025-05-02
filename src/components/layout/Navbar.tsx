"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  const navItems = [
    { name: t("home"), path: "/" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-950 z-50 border-b border-gray-900">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-medium text-xl text-white">
          <span className="font-bold">Eslam</span> Ramadan
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              
              return (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className={`relative py-2 px-1 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-600 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute left-0 bottom-0 w-full h-[2px] bg-white"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
            <li>
              <a 
                href="/CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative py-2 px-1 text-gray-600 hover:text-white transition-colors duration-300"
              >
                {t("cv")}
              </a>
            </li>
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </nav>
        
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSelector />
          <button onClick={toggleMobileMenu} className="p-2 text-white focus:outline-none">
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.nav 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-950 border-t border-gray-900"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    onClick={toggleMobileMenu}
                    className={`block py-2 px-4 text-center transition-colors duration-300 ${
                      isActive ? "text-white font-semibold" : "text-gray-600 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <a 
                href="/CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMobileMenu}
                className="block py-2 px-4 text-center text-gray-600 hover:text-white transition-colors duration-300"
              >
                {t("cv")}
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar; 