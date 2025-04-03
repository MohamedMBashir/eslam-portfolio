"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// Real project data with actual images
const projects = [
  {
    id: 1,
    title: "Language Center",
    description: "Etiler District Educational Facility",
    hover: "This project is a language center designed in Etiler, a district known for its affluent community and a significant number of young residents studying abroad. Recognizing the area's international outlook, the center aims to provide a dynamic learning environment that fosters multilingual education and cultural exchange.",
    thumbnail: "/projects/Project 1/CoverForMainPage.jpg",
    slug: "language-center",
  },
  {
    id: 2,
    title: "Cultural Exhibition Center",
    description: "Istanbul Historical Artifacts Showcase",
    hover: "This project is a cultural and exhibition center designed to showcase Istanbul's vast collection of historical artifacts, with over 700,000 pieces currently stored away. Located in a historically rich area overlooking the city's ancient walls and Yedikule, the center goes beyond a traditional museum. It offers an immersive experience with 3D animation rooms, interactive exhibitions, and a conference hall for cultural events. By bringing Turkish, Ottoman, and Byzantine history to life, the project serves as both a preservation space and a vibrant hub for education and engagement.",
    thumbnail: "/projects/Project 2/CoverForMainPage.jpg",
    slug: "cultural-exhibition-center",
  },
  {
    id: 3,
    title: "Bungalow Site",
    description: "Resort and Recreation Complex",
    hover: "This 3D model realistically represents a bungalow site, emphasizing accurate terrain, lighting, and materials. It captures the layout of single and two-story bungalows, along with key spaces like the restaurant, pool, and café. With detailed textures and natural lighting, the model enhances realism, providing a clear and immersive visualization of the site.",
    thumbnail: "/projects/Project 3/CoverForMainPage.jpg",
    slug: "bungalow-site",
  },
  {
    id: 4,
    title: "Apartment Complex",
    description: "Residential Building Design",
    hover: "This 3D models showcase a detailed apartment design, featuring a carefully crafted elevation and thoughtfully selected materials. Realistic textures, natural and interior lighting, and precise detailing bring the design to life, highlighting the building's form and materiality.",
    thumbnail: "/projects/Project 4/CoverForMainPage.jpg",
    slug: "apartment-complex",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {isHovered && (
              <div className="absolute inset-0 bg-black/70 p-6 flex flex-col justify-end transition-opacity duration-300">
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  {project.hover}
                </p>
              </div>
            )}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">My Projects</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 