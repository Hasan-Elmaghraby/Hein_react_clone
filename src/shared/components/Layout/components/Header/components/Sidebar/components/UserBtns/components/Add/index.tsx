import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { AddIcon } from "@/shared/icons/Add";

export const Add = () => {
  return (
    <Link to="/add-ad" className={styles.addAd}>
      <div className={styles.addIcon}>
        <AddIcon />
      </div>
    </Link>
  );
};
