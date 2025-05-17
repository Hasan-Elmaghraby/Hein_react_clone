import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ChatIcon } from "@/shared/icons/Chat";

export const Messages = () => {
  return (
    <Link to="/messages" className={styles.messages}>
      <ChatIcon />
    </Link>
  );
};
