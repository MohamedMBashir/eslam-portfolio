"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="flex flex-col items-center">
            <Link href="/" className="font-medium text-2xl text-white mb-6">
              <span className="font-bold">{t("contactMe")}</span>
            </Link>
            
            <div className="flex space-x-6 mb-8">
              <motion.a
                href="https://www.linkedin.com/in/eslam-ramadan-7a38a4268/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-blue-500 rounded-xl hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/905050405951"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-green-500 rounded-xl hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:eslaaanramadann@gmail.com"
                className="p-3 bg-gray-800 text-red-500 rounded-xl hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="w-5 h-5" />
              </motion.a>
            </div> 
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                {t("copyright")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 