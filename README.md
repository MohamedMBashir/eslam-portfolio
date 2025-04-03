# Eslam Architecture Portfolio

An elegant personal portfolio website showcasing architectural projects with a minimal, sophisticated design. Built with Next.js and Tailwind CSS, this portfolio emphasizes high-quality project imagery and detailed project information.

## Features

- Responsive design optimized for all devices
- Elegant, clean aesthetic with dark/light project theming options
- Interactive project cards with hover descriptions
- Detailed project pages with customizable layouts
- Image galleries for each project
- Smooth animations and transitions

## Project Organization

The portfolio is organized with the following structure:

- Home page with featured projects
- Individual project pages with customized layouts
- Project images stored in the `/public/projects/` directory

### Project Image Structure

Each project has its own folder with images:
```
/public/projects/
  Project 1/
    - Model Render 1.jpg
    - Model Render 2.jpg
    - ...
  Project 2/
    - Model Render 1.jpg
    - ...
```

## Customizing Project Content

### Updating Project Cards on Home Page

To update the project cards displayed on the home page, edit the `projects` array in:
```
src/components/ui/Projects.tsx
```

### Updating Project Pages

The detailed project information is stored in the `projectsData` object in:
```
src/app/projects/[slug]/page.tsx
```

Each project has the following customizable structure:

```typescript
{
  title: "Project Title",
  description: "Short project description",
  introduction: "Longer introduction paragraph",
  client: "Client name",
  year: "Year completed",
  location: "Project location",
  fullDescription: [
    "Paragraph 1...",
    "Paragraph 2...",
    "Paragraph 3..."
  ],
  concept: "Concept description...",
  mainImage: "/projects/Project X/Main Image.jpg",
  gallery: [
    { src: "/projects/Project X/Image1.jpg", alt: "Image description" },
    // More gallery images...
  ],
  features: [
    "Feature 1",
    "Feature 2",
    // More features...
  ],
  approach: "Optional approach description",
  dark: true/false  // Optional: Use dark theme for this project
}
```

### Adding a New Project

To add a new project:

1. Add images to a new folder in `/public/projects/Project X/`
2. Update the `projects` array in `src/components/ui/Projects.tsx`
3. Add a new entry to the `projectsData` object in `src/app/projects/[slug]/page.tsx`
4. Make sure the `slug` value in Projects.tsx matches the key in projectsData

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v16.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/eslam-portfolio.git
cd eslam-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio

## Deployment

The portfolio can be easily deployed on Vercel:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site

## Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Design inspired by minimal architecture portfolios
