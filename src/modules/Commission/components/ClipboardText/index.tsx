import React from "react";
import { CopyFileIcon } from "@/shared/icons/CopyFile";
import styles from "./styles.module.scss";

interface Props {
  text: string;
}

export const ClipboardText: React.FC<Props> = ({ text }) => {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <span className={styles.clipboardText}>
      <span className={styles.text}>{text}</span>
      <span
        className={styles.iconWrapper}
        onClick={copyToClipboard}
        title={`copy ${text}`}
      >
        <CopyFileIcon />
      </span>
    </span>
  );
};
