import { Axios } from "@/shared/services/Axios";
import { useMutation } from "@tanstack/react-query";
import { CONTACT } from "@/shared/services/api/config";

interface formData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export const usePostContactUs = () => {
  return useMutation({
    mutationKey: ["contact-us"],
    mutationFn: async (formData: formData) => {
      const { data } = await Axios.post(CONTACT, formData);
      return data;
    },
  });
};
