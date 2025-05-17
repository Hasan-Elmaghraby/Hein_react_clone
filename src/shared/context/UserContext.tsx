import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import Cookies from "js-cookie";
import { Axios } from "@/shared/services/Axios";
import { PROFILE } from "@/shared/services/api/config";
import { DataInfo } from "../model/UserProfile";

interface UserContextType {
  user: DataInfo | null;
  setUser: (user: DataInfo | null) => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<DataInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const token = Cookies.get("access_token");
      if (!token) return setLoading(false);

      const { data } = await Axios.get(PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.status === true) {
        setUser(data.data.info);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
