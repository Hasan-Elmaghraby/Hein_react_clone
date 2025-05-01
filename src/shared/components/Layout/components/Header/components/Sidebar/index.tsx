import styles from "./styles.module.scss";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import { AuthBtn } from "./components/AuthBtn";
import { CloseBtn } from "./components/CloseBtn";
import { LangChange } from "./components/LangChange";

interface SidebarProps {
  isNavOpen: boolean;
  logo: string;
  onClick: () => void;
}
export const Sidebar: React.FC<SidebarProps> = ({
  isNavOpen,
  logo,
  onClick,
}) => {
  return (
    <div className={`${styles.sidebar} ${isNavOpen && styles.active}`}>
      <figure className={styles.mobileLogo}>
        <img src={logo} alt="logo" />
      </figure>

      <Nav />
      <div className={styles.btns}>
        <Search />
        <div className={styles.authBtns}>
          <AuthBtn type="login" />
          <AuthBtn type="register" />
        </div>
        <LangChange />
      </div>
      <CloseBtn onClick={onClick} />
    </div>
  );
};
