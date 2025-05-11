import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { SIGNUP } from "@/shared/services/api/config";

const useAuth = () => {
  return useMutation({
    mutationFn: async (formData: {
      name: string;
      mobile: string;
      email: string;
      password: string;
    }) => {
      const { data } = await Axios.post(`${SIGNUP}`, formData);
      return data;
    },
  });
};

export default useAuth;
