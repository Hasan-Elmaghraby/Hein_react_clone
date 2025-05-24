import React from "react";
import { ModalCloseIcon } from "@/shared/icons/ModalClose";
import styles from "./styles.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <ModalCloseIcon />
          <span>إغلاق</span>
        </button>
        {children}
      </div>
    </div>
  );
};
