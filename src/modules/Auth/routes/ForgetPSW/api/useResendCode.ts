import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { FORGET } from "@/shared/services/api/config";

const useResendCode = () => {
  return useMutation({
    mutationFn: async (formData: { mobile: string }) => {
      const { data } = await Axios.post(`${FORGET}`, formData);
      return data;
    },
  });
};

export default useResendCode;
