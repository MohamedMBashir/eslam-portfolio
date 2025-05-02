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
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Title section - always on top for mobile */}
          <div className="w-full text-center md:text-left order-1 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
                Eslam Ramadan
              </h1>
              <p className="text-xl md:text-2xl mb-6 md:mb-8 text-gray-600">
                {t("iam")} {t("architectureStudent")}
              </p>
              
              {/* Buttons - only visible on desktop */}
              <div className="hidden md:flex space-x-4 justify-start pointer-events-auto">
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
          </div>
          
          {/* Image section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[85%] mx-auto md:w-full md:max-w-[500px] pointer-events-auto order-2 md:order-2"
          >
            <div className="relative h-[450px] md:h-[650px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Profile Photo"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 85vw, 500px"
              />
            </div>
          </motion.div>
          
          {/* Buttons - only visible on mobile, below image */}
          <div className="md:hidden w-full flex space-x-4 justify-center pointer-events-auto order-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex space-x-4"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 