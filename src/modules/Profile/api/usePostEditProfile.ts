import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { EDIT_PROFILE } from "@/shared/services/api/config";
import Cookies from "js-cookie";

type ProfilePayload = {
  name?: string | undefined;
  mobile: string;
  email: string;
  info: {
    about: string;
  };
};
export const usePostEditProfile = () => {
  const token = Cookies.get("access_token");
  return useMutation({
    mutationKey: ["editProfile"],
    mutationFn: async (formData: ProfilePayload) => {
      const { data } = await Axios.post(EDIT_PROFILE, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
  });
};
