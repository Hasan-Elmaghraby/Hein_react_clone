import React from "react";
import styles from "./styles.module.scss";

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  name?: string;
}

export const Textarea: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  name,
}) => {
  return (
    <div className={`${styles.textareaWrapper} ${value && styles.active}`}>
      <textarea
        className={styles.textarea}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label className={styles.label}>{placeholder}</label>
    </div>
  );
};
