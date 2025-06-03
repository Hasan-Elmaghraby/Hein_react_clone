import React from "react";
import styles from "./styles.module.scss";

interface CheckboxProps {
  label: React.ReactNode;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  value?: boolean;
  name?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  name,
}) => {
  return (
    <div className={styles.customCheckboxWrapper}>
      <label className={styles.customCheckbox}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          name={name}
        />
        <span className={styles.customCheckmark}></span>
      </label>
      {label}
    </div>
  );
};
