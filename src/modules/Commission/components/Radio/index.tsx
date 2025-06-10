import React from "react";
import styles from "./styles.module.scss";

interface RadioProps {
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  id?: string;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  checked,
  onChange,
  name,
  value,
  id,
}) => {
  const radioId = id || `${name}-${value}`;

  return (
    <div className={styles.customCheckboxWrapper}>
      <label className={styles.customCheckbox} htmlFor={radioId}>
        <input
          type="radio"
          id={radioId}
          checked={checked}
          onChange={onChange}
          name={name}
          value={value}
        />
        <span className={styles.customCheckmark}></span>
      </label>
      <label htmlFor={radioId}>{label}</label>
    </div>
  );
};
