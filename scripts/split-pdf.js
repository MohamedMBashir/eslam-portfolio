const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');
const sharp = require('sharp');
const pdf2img = require('pdf-img-convert');

// Create portfolio directory if it doesn't exist
const outputDir = path.join(__dirname, '../public/portfolio');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function splitPDF() {
  try {
    const pdfPath = path.join(__dirname, '../public/portfolio.pdf');
    
    console.log('Converting PDF to images...');
    const pdfArray = await pdf2img.convert(pdfPath, {
      width: 1500, // Adjust resolution as needed
      quality: 100,
      density: 300,
      format: 'jpg',
      outputType: 'buffer'
    });
    
    console.log(`Total pages: ${pdfArray.length}`);
    
    // Save each page as an image
    for (let i = 0; i < pdfArray.length; i++) {
      const pageNum = i + 1;
      const outputPath = path.join(outputDir, `page-${pageNum.toString().padStart(2, '0')}.jpg`);
      
      await sharp(pdfArray[i])
        .jpeg({ quality: 90 })
        .toFile(outputPath);
      
      console.log(`Page ${pageNum} saved to ${outputPath}`);
    }
    
    console.log('PDF splitting complete!');
  } catch (error) {
    console.error('Error splitting PDF:', error);
  }
}

splitPDF(); 