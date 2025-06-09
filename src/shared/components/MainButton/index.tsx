import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text?: string;
  type: string;
  onClick?: () => void;
  closeModal?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
  maxWidth?: string;
  maxHeight?: string;
}

export const Button: React.FC<Props> = ({
  text,
  type,
  onClick,
  icon,
  disabled,
  children,
  maxWidth,
  maxHeight,
}) => {
  return (
    <button
      className={`${styles.btn} ${type === "hero" && styles.hero} ${
        type === "primary" && styles.btn
      } ${type === "danger" && styles.danger}
      ${type === "edit" && styles.edit}
      ${type === "editAds" && styles.editAds}
      ${type === "notActive" && styles.notActive}
      ${disabled && styles.disabled}
      `}
      style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
      onClick={onClick}
      disabled={disabled}
    >
      {icon} {text} {children}
    </button>
  );
};
