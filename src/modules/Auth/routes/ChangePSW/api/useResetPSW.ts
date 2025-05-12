import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { RESET_PASSWORD } from "@/shared/services/api/config";

const useResetPSW = () => {
  return useMutation({
    mutationFn: async (formData: { code_id: string; password: string }) => {
      const { data } = await Axios.post(RESET_PASSWORD, formData);
      return data;
    },
  });
};

export default useResetPSW;
