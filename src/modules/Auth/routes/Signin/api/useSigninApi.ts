import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { LOGIN } from "@/shared/services/api/config";

const useSigninApi = () => {
  return useMutation({
    mutationFn: async (formData: { mobile: string; password: string }) => {
      const { data } = await Axios.post(`${LOGIN}`, formData);
      return data;
    },
  });
};

export default useSigninApi;
