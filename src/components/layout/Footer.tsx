"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="flex flex-col items-center">
            <Link href="/" className="font-medium text-2xl text-white mb-6">
              <span className="font-bold">Get In Touch</span>
            </Link>
            
            <div className="flex space-x-6 mb-8">
              <motion.a
                href="https://www.linkedin.com/in/eslam-ramadan-7a38a4268/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
              <motion.div
                className="p-3 bg-gray-800 text-gray-600 rounded-xl cursor-not-allowed"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.div>
              <motion.a
                href="mailto:eslaaanramadann@gmail.com"
                className="p-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="w-5 h-5" />
              </motion.a>
            </div> 
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Eslam Ramadan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 