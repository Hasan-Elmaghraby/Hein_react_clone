import { Sidebar } from "./components/Sidebar";
import { NavBtn } from "./components/NavBtn";
import { Logo } from "./components/Logo";
import { Overlay } from "./components/Overlay";
import styles from "./styles.module.scss";
import { Container } from "../../../Container";
import logo from "@public/images/logo.png";
import { useHeader } from "./hooks/useHeader";
import { useUser } from "@/shared/context/UserContext";
import useGetLogout from "@/shared/components/Layout/api/useGetLogout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { mutateAsync, data, isError, isSuccess, error } = useGetLogout();

  const {
    isNavOpen,
    handleNavToggle,
    handleNavClose,
    isHeaderFixed,
    handleCloseModal,
    isModalOpen,
    handleClickModal,
  } = useHeader();

  const handleLogout = () => {
    mutateAsync();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      Cookies.remove("access_token");
      handleCloseModal();
      setUser(null);
      navigate("/");
    }

    if (isError) {
      toast.error(error.message);
    }
  }, [isSuccess, isError]);
  return (
    <header
      className={`${styles.header} ${!isHeaderFixed ? styles.headerFixed : ""}`}
    >
      <Container>
        <div className={styles.headerWrapper}>
          <Logo logo={logo} />
          <Sidebar
            userActive={user?.active}
            user={user}
            isNavOpen={isNavOpen}
            logo={logo}
            onClick={handleNavToggle}
            logout={handleLogout}
            onClickModal={handleClickModal}
            onCloseModal={handleCloseModal}
            isModalOpen={isModalOpen}
          />
          <NavBtn onClick={handleNavToggle} isNavOpen={isNavOpen} />
        </div>
      </Container>
      <Overlay
        onClick={handleNavToggle}
        onKeyDown={handleNavClose}
        isNavOpen={isNavOpen}
      />
    </header>
  );
};
