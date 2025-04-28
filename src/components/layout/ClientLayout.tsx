"use client";

import { ReactNode, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
};

export default ClientLayout; 