"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface TranslatedProjectLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const TranslatedProjectLayout = ({ children, title, subtitle }: TranslatedProjectLayoutProps) => {
  const { t } = useLanguage();

  return (
    <article className="pt-28 pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/#projects" className="inline-flex items-center mb-8 text-gray-600 hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t("backToProjects")}
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t(title)}</h1>
          <p className="text-xl text-gray-600 mb-8">{t(subtitle)}</p>
          
          {children}
        </div>
      </div>
    </article>
  );
};

export default TranslatedProjectLayout; 