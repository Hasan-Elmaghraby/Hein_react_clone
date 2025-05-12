import { useState } from "react";

export const useForgetPSW = () => {
  const [phone, setPhone] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return {
    phone,

    handleInputChange,
  };
};
