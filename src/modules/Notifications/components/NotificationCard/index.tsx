import React from "react";
import styles from "./styles.module.scss";
import { NotificationIcon } from "@/shared/icons/Notification";

interface Props {
  title: string;
  time: string;
  text: string;
}

export const NotificationCard: React.FC<Props> = ({ title, time, text }) => {
  return (
    <div className={styles.notificationCard}>
      <div className={styles.headerCard}>
        <div className={styles.iconWrapper}>
          <NotificationIcon />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.time}>{time}</p>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
