import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { LOGOUT } from "@/shared/services/api/config";
import Cookies from "js-cookie";

const useGetLogout = () => {
  const token = Cookies.get("access_token");

  return useMutation({
    mutationFn: async () => {
      const { data } = await Axios.get(LOGOUT, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
  });
};

export default useGetLogout;
