import { SearchIcon } from "@/shared/icons/Search";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
export const Search = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input type="text" placeholder={t("header.searchPlaceholder")} />
    </div>
  );
};
