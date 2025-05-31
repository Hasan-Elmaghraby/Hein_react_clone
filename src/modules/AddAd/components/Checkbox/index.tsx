import React from "react";
import styles from "./styles.module.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  onClick?: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <div className={styles.customCheckboxWrapper}>
      <label className={styles.customCheckbox}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className={styles.customCheckmark}></span>
      </label>
      {label}
    </div>
  );
};
