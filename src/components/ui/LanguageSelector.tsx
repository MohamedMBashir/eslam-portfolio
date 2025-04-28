"use client";

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: 'en' | 'tr') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="py-2 px-4 rounded-full bg-slate-700 text-slate-200 shadow-sm hover:bg-slate-600 hover:text-white hover:shadow-md transition-all duration-300"
        aria-label="Select language"
      >
        <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'TR'}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-36 rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800 z-50"
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              <button
                onClick={() => changeLanguage('en')}
                className={`w-full text-left flex items-center justify-between px-4 py-2.5 transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-slate-700 text-white' 
                    : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                }`}
                role="menuitem"
              >
                <span className="text-sm font-medium">English</span>
                {language === 'en' && (
                  <motion.svg 
                    className="w-4 h-4 text-slate-300" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                )}
              </button>
              <button
                onClick={() => changeLanguage('tr')}
                className={`w-full text-left flex items-center justify-between px-4 py-2.5 transition-all duration-300 ${
                  language === 'tr' 
                    ? 'bg-slate-700 text-white' 
                    : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                }`}
                role="menuitem"
              >
                <span className="text-sm font-medium">Türkçe</span>
                {language === 'tr' && (
                  <motion.svg 
                    className="w-4 h-4 text-slate-300" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector; 