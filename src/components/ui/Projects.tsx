"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  // Projects data with translation keys
  const projects = [
    {
      id: 1,
      titleKey: "languageCenter",
      descriptionKey: "etilerDistrict",
      hoverKey: "languageCenterHover",
      thumbnail: "/projects/Project 1/CoverForMainPage.jpg",
      slug: "language-center",
    },
    {
      id: 2,
      titleKey: "culturalExhibitionCenter",
      descriptionKey: "istanbulHistorical",
      hoverKey: "culturalExhibitionHover",
      thumbnail: "/projects/Project 2/CoverForMainPage.jpg",
      slug: "cultural-exhibition-center",
    },
    {
      id: 3,
      titleKey: "bungalowSite",
      descriptionKey: "resortComplex",
      hoverKey: "bungalowHover",
      thumbnail: "/projects/Project 3/CoverForMainPage.jpg",
      slug: "bungalow-site",
    },
    {
      id: 4,
      titleKey: "apartmentComplex",
      descriptionKey: "residentialBuilding",
      hoverKey: "apartmentHover",
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
                alt={t(project.titleKey)}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {isHovered && (
                <div className="absolute inset-0 bg-black/70 p-6 flex flex-col justify-end transition-opacity duration-300">
                  <p className="text-white text-lg md:text-xl leading-relaxed">
                    {t(project.hoverKey)}
                  </p>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                {t(project.titleKey)}
              </h3>
              <p className="text-gray-600">{t(project.descriptionKey)}</p>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">{t("projects")}</h2>
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