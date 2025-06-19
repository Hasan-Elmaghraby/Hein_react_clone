import React from "react";
import { SendMessageIcon } from "@/shared/icons/SendMessage";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const InputMessage: React.FC<Props> = ({
  onChange,
  onSubmit,
  value,
}) => {
  const { t } = useTranslation();

  return (
    <form className={styles.inputWrapper} onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        name="messgae"
        id="message"
        value={value}
        placeholder={t("messages.placeholder")}
        className={styles.input}
      />
      <button type="submit" className={styles.sendIcon}>
        <SendMessageIcon />
      </button>
    </form>
  );
};
