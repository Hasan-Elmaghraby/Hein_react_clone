import { SearchIcon } from "@/shared/icons/Search";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
export const Search = () => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickIcon = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.search}>
      <SearchIcon onClick={handleClickIcon} />
      <input
        ref={inputRef}
        type="text"
        placeholder={t("header.searchPlaceholder")}
      />
    </div>
  );
};
