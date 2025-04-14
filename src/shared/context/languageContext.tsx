import React, { createContext, useEffect, useState } from 'react';

import i18n from '../services/i18n/config';

interface LanguageContextType {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState(i18n.language);
  const [key, setKey] = useState(0);

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    setKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <div key={key}>{children}</div>
    </LanguageContext.Provider>
  );
};
