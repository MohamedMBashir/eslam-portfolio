import os
import sys
from pdf2image import convert_from_path
from pathlib import Path


def split_pdf_to_images(pdf_path, output_dir):
    """
    Convert PDF to individual page images

    Args:
        pdf_path: Path to the PDF file
        output_dir: Directory to save the images
    """
    # Create output directory if it doesn't exist
    Path(output_dir).mkdir(parents=True, exist_ok=True)

    print(f"Converting PDF at {pdf_path} to images...")

    # Convert PDF pages to images
    images = convert_from_path(
        pdf_path,
        dpi=300,  # Higher DPI for better quality
        fmt="jpeg",
        thread_count=4,
    )

    print(f"Total pages: {len(images)}")

    # Save each page as an image
    for i, image in enumerate(images):
        page_num = i + 1
        output_path = os.path.join(output_dir, f"page-{page_num:02d}.jpg")
        image.save(output_path, "JPEG", quality=95)
        print(f"Saved page {page_num} to {output_path}")

    print("PDF conversion complete!")


if __name__ == "__main__":
    # Get current script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Set paths
    project_root = os.path.dirname(script_dir)
    pdf_path = os.path.join(project_root, "public", "portfolio.pdf")
    output_dir = os.path.join(project_root, "public", "portfolio")

    # Verify PDF exists
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file not found at {pdf_path}")
        sys.exit(1)

    # Convert PDF to images
    split_pdf_to_images(pdf_path, output_dir)
