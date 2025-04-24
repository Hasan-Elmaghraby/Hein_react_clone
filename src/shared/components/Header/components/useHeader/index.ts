import React, { useEffect, useState } from "react";

export const useHeader = () => {
  const [isNavOpen, setNavIsOpen] = useState(false);
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNavToggle = () => setNavIsOpen(!isNavOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderFixed(false);
      } else {
        setHeaderFixed(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const handleNavClose = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setNavIsOpen(false);
    }
  };
  return { isNavOpen, handleNavToggle, handleNavClose, isHeaderFixed };
};
