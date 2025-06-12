import React from "react";
import styles from "./styles.module.scss";

interface Props {
  value: string;
  type: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  pattern?: string;
  rest?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Input: React.FC<Props> = ({
  onChange,
  name,
  type,
  value,
  placeholder,
  required,
  pattern,
  ...rest
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${styles.input} ${value && styles.active}`}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        pattern={pattern}
        {...rest}
      />
      <label className={styles.label}> {placeholder}</label>
    </div>
  );
};
