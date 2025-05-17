import { ReactNode } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useUser } from "@/shared/context/UserContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user } = useUser();
  return (
    <>
      <Header userActive={user?.active} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
