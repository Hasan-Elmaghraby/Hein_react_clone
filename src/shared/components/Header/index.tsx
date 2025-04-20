import React, { useState } from "react";
import { Container } from "../Container";
import styles from "./styles.module.scss";
import logo from "@public/images/logo.png";
import { Sidebar } from "./components/Sidebar";
import { NavBtn } from "./components/NavBtn";

export const Header: React.FC = () => {
  const [isNavOpen, setNavIsOpen] = useState(false);
  const handleNavToggle = () => setNavIsOpen(!isNavOpen);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <figure className={styles.logo}>
            <img src={logo} alt="logo" />
          </figure>

          <Sidebar isNavOpen={isNavOpen} />
          <NavBtn onClick={handleNavToggle} isNavOpen={isNavOpen} />
        </div>
      </Container>
      <div
        onClick={handleNavToggle}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            handleNavToggle();
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Toggle navigation"
        className={`${styles.overlay} ${isNavOpen ? `${styles.active}` : ""}`}
      />
    </header>
  );
};
