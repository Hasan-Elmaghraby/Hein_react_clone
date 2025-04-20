import logo from "@public/images/logo.png";
import styles from "./styles.module.scss";
import { Nav } from "../Nav";
import { Search } from "../Search";
import { AuthBtn } from "../AuthBtn";

interface SidebarProps {
  isNavOpen: boolean;
}
export const Sidebar: React.FC<SidebarProps> = ({ isNavOpen }) => {
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
      </div>
    </div>
  );
};
