import { useEffect, useState, useRef } from "react";

export const useHeader = () => {
  const [isNavOpen, setNavIsOpen] = useState(false);
  const [isHeaderFixed, setHeaderFixed] = useState(true);
  const lastScrollY = useRef(0);

  const handleNavToggle = () => setNavIsOpen(!isNavOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 300) {
        setHeaderFixed(true);
      } else {
        if (currentScrollY > lastScrollY.current) {
          setHeaderFixed(false);
        } else {
          setHeaderFixed(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClose = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setNavIsOpen(false);
    }
  };

  return { isNavOpen, handleNavToggle, handleNavClose, isHeaderFixed };
};
