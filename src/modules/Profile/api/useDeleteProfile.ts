import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { DELETE_PROFILE } from "@/shared/services/api/config";
import Cookies from "js-cookie";
export const useDeleteProfile = () => {
  const token = Cookies.get("access_token");
  return useMutation({
    mutationKey: ["deleteProfile"],
    mutationFn: async () => {
      const { data } = await Axios.delete(DELETE_PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
  });
};
