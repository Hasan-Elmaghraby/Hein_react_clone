import styles from "./styles.module.scss";
import { AddIcon } from "@/shared/icons/Add";

export const Add = () => {
  return (
    <div className={styles.addAd}>
      <div className={styles.addIcon}>
        <AddIcon />
      </div>
    </div>
  );
};
