import React from "react";
import styles from "./styles.module.scss";
import { Button } from "@/shared/components/MainButton";

interface Props {
  userName: string;
  phone: string | number;
  email: string;
  message: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  disabled: boolean;
}

export const Form: React.FC<Props> = ({
  userName,
  phone,
  email,
  message,
  onChange,
  onSubmit,
  disabled,
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.input}>
        <input
          type="text"
          name="userName"
          onChange={onChange}
          value={userName}
          id="name"
          placeholder="الاسم"
        />
      </div>
      <div className={styles.input}>
        <input
          type="tel"
          name="phone"
          onChange={onChange}
          value={phone}
          id="phone"
          placeholder="رقم الهاتف"
        />
      </div>
      <div className={styles.input}>
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={email}
          id="email"
          placeholder={"البريد الالكتروني"}
        />
      </div>
      <div className={styles.input}>
        <textarea
          name="message"
          onChange={onChange}
          value={message}
          id="message"
          placeholder="نص الرسالة"
        />
      </div>

      <Button type="primary" text="ارسال" disabled={disabled} />
    </form>
  );
};
