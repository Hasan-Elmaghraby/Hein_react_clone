import styles from "./style.module.scss";
import { Add } from "./components/Add";
import { Notifications } from "./components/Notifications";
import { Messages } from "./components/Messages";

export const UserBtns = () => {
  return (
    <div className={styles.userBtns}>
      <Notifications />
      <Messages />
      <Add />
      <div className={styles.userInfo}>
        <div className={styles.userInfoBtn}>
          {/* <img src={} alt="" /> */}
          dsfsdf{" "}
        </div>
      </div>
    </div>
  );
};
