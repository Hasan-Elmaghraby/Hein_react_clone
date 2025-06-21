import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useTabTitle = (title: string) => {
  const { t } = useTranslation();

  useEffect(() => {
    const appName = t("app.name");
    const pageTitle = t(`pages.${title}`);
    document.title = `${appName} | ${pageTitle}`;
  }, [title, t]);
};
