import { useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { DropDownButtonArrowIcon } from "@/shared/icons/DropDownButtonArrow";

export const Dropdown = () => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`${styles.dropdown} ${styles.headerListItem}`}>
      <div className={styles.dropdownBtn} onClick={handleToggleDropdown}>
        {t("header.sections")}
        <DropDownButtonArrowIcon
          className={`${isDropdownOpen && styles.active}`}
        />
      </div>

      <ul
        className={`${styles.dropdownList} ${isDropdownOpen && styles.active}`}
      >
        <li className={styles.listItem}>
          <a href="#">{t("header.section1")}</a>
        </li>
        <li className={styles.listItem}>
          <a href="#">{t("header.section2")}</a>
        </li>
        <li className={styles.listItem}>
          <a href="#">{t("header.section3")}</a>
        </li>
      </ul>
    </div>
  );
};
