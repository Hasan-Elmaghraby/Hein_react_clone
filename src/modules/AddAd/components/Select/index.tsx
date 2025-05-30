import React from "react";
import styles from "./styles.module.scss";

interface Option {
  value: string;
  label: string;
}
interface SelectProps {
  options: Option[];
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  name?: string;
  required?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  name,
  required,
}) => {
  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.select}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      >
        <option value="" disabled hidden></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label className={`${styles.label} ${value ? styles.active : ""}`}>
        {placeholder}
      </label>
    </div>
  );
};
