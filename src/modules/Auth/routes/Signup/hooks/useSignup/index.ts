import { useState } from "react";

export const useSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [form, setForm] = useState({
    userName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { userName, phone, email, password, confirmPassword } = form;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return {
    showPassword,
    showConfirmPassword,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    userName,
    phone,
    email,
    password,
    confirmPassword,
    form,
    setForm,
    handleInputChange,
  };
};
