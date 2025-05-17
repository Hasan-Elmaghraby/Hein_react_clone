import styles from "./style.module.scss";
import { Add } from "./components/Add";
import { Notifications } from "./components/Notifications";
import { Messages } from "./components/Messages";
import { DataInfo } from "@/shared/model/UserProfile";
import { UserInfo } from "./components/UserInfo";

interface UserBtnsProps {
  user: DataInfo | null;
}

export const UserBtns: React.FC<UserBtnsProps> = ({ user }) => {
  return (
    <div className={styles.userBtns}>
      <Notifications />
      <Messages />
      <Add />
      <UserInfo userImage={user?.image} userName={user?.name} />
    </div>
  );
};
