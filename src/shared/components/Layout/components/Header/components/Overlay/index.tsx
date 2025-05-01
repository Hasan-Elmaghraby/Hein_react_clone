import React from "react";
import styles from "./styles.module.scss";

interface OverlayProps {
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  isNavOpen: boolean;
}

export const Overlay: React.FC<OverlayProps> = ({
  onClick,
  isNavOpen,
  onKeyDown,
}) => {
  return (
    <div
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="button"
      aria-label="Toggle navigation"
      className={`${styles.overlay} ${isNavOpen && styles.active}`}
    />
  );
};
