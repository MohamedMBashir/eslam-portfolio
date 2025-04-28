"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center py-24 overflow-hidden bg-gray-50">
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-auto"> 
        <HeroBackground />
      </div>
      <div className="relative z-10 container mx-auto px-4 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
              Eslam Ramadan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              {t("iam")} {t("architectureStudent")}
            </p>
            <div className="flex space-x-4 justify-center md:justify-start pointer-events-auto">
              <a
                href="#projects"
                className="px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors rounded-lg"
              >
                {t("viewProjects")}
              </a>
              <a
                href="/portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors rounded-lg"
              >
                {t("portfolio")}
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[550px] mx-auto pointer-events-auto"
          >
            <div className="relative h-[700px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Profile Photo"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 550px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 