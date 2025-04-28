"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">{t("aboutMe")}</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              {t("aboutText")}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-gray-900">{t("education")}</h3>
                <p className="text-gray-700">{t("bachelorOfArchitecture")}</p>
                <p className="text-gray-600">{t("yildizTechnicalUniversity")}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-gray-900">{t("languages")}</h3>
                <p className="text-gray-700">{t("turkish")}</p>
                <p className="text-gray-700">{t("english")}</p>
                <p className="text-gray-700">{t("arabic")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 