import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "@/shared/services/i18n/config";
import { LangIcon } from "@/shared/icons/Lang";
import styles from "./styles.module.scss";

export const LangChange: React.FC = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");

  const toggleLanguage = () => {
    const languages = Object.keys(supportedLngs);
    const currentIndex = languages.indexOf(lang);
    const nextLang = languages[(currentIndex + 1) % languages.length];

    i18n.changeLanguage(nextLang);
    setLang(nextLang);
  };

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return (
    <div className={styles.langChange}>
      <LangIcon className={styles.langIcon} onClick={toggleLanguage}>
        {supportedLngs[lang as keyof typeof supportedLngs]}
      </LangIcon>
      <span className={styles.langText}>{lang}</span>
    </div>
  );
};
