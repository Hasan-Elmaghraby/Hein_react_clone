import { NotificationIcon } from "@/shared/icons/Notification";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Notifications = () => {
  return (
    <Link
      to="/notifications"
      className={styles.notifications}
      title="notifications"
    >
      <NotificationIcon />
    </Link>
  );
};
