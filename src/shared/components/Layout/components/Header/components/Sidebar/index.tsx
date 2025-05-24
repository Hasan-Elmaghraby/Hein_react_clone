import styles from "./styles.module.scss";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import { AuthBtn } from "./components/AuthBtn";
import { CloseBtn } from "./components/CloseBtn";
import { LangChange } from "./components/LangChange";
import { UserBtns } from "./components/UserBtns";
import { DataInfo } from "@/shared/model/UserProfile";

interface SidebarProps {
  isNavOpen: boolean;
  logo: string;
  userActive: boolean | undefined;
  user: DataInfo | null;
  onClick: () => void;
  logout: () => void;
  onClickModal: () => void;
  onCloseModal: () => void;
  isModalOpen: boolean
}
export const Sidebar: React.FC<SidebarProps> = ({
  isNavOpen,
  logo,
  onClick,
  userActive,
  user,
  logout,
  onClickModal,
  onCloseModal,
  isModalOpen,
}) => {
  return (
    <div className={`${styles.sidebar} ${isNavOpen && styles.active}`}>
      <figure className={styles.mobileLogo}>
        <img src={logo} alt="logo" />
      </figure>

      <Nav />
      <div className={styles.btns}>
        <Search />

        {userActive ? (
          <UserBtns user={user} logout={logout} onClickModal={onClickModal} onCloseModal={onCloseModal} isModalOpen={isModalOpen} />
        ) : (
          <div className={styles.authBtns}>
            <AuthBtn type="login" />
            <AuthBtn type="register" />
          </div>
        )}

        <LangChange />
      </div>
      <CloseBtn onClick={onClick} />
    </div>
  );
};
