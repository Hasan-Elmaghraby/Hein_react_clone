import React, { useState } from "react";

export const useForm = () => {
  const [form, setForm] = useState({
    userName: "",
    phone: "",
    email: "",
    message: "",
  });

  const { userName, phone, email, message } = form;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return {
    userName,
    phone,
    email,
    message,
    onChange,
    onSubmit,
  };
};
