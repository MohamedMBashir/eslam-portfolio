"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">About Me</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              Architecture teaches me how to analyze, define, and solve complex problems. Each project strengthened my skills in finding creative solutions and paying attention to detail. Architecture, with both its technical and artistic aspects, has become an inspiring and rewarding profession for me. Moreover, it has taught me to analyze the context around me, addressing surrounding issues and finding ways to solve them.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Education</h3>
                <p className="text-gray-700">Bachelor of Architecture</p>
                <p className="text-gray-600">Yildiz Technical University, 2022-Present</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Languages</h3>
                <p className="text-gray-700">Turkish</p>
                <p className="text-gray-700">English</p>
                <p className="text-gray-700">Arabic</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 