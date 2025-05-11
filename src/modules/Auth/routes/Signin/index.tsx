import React from "react";
import styles from "./styles.module.scss";
import { Section } from "@/shared/components/Section";
import { HeadForm } from "../../components/HeadForm";
import { Button } from "@/shared/components/Button";
import { EyeIcon } from "@/shared/icons/Eye";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../useForm";
import { LockIcon } from "@/shared/icons/Lock";
import useSignUp from "../../api/useSignUp";

const Signin: React.FC = () => {
  const { mutateAsync } = useSignUp();
  const navigate = useNavigate();

  const {
    showPassword,
    togglePasswordVisibility,
    userName,
    phone,
    email,
    password,
    handleInputChange,
    setForm,
  } = useForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setForm({
      userName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    try {
      const response = await mutateAsync({
        name: userName,
        mobile: phone,
        email,
        password,
      });
      navigate("/validation");
      localStorage.setItem("phone", phone);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <div className={styles.auth}>
        <HeadForm
          title="تسجيل الدخول"
          desc="قم بإدخال بيانات حسابك لتسجيل الدخول"
        />
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <input
              onChange={handleInputChange}
              value={phone}
              type="tel"
              name="phone"
              id="phone"
              placeholder=" ادخل رقم الجوال "
              required
            />
          </div>

          <div className={styles.inputWrapper}>
            <input
              onChange={handleInputChange}
              value={password}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="ادخل كلمة المرور"
              required
            />
            <div className={styles.eyeIcon} onClick={togglePasswordVisibility}>
              {showPassword ? <LockIcon /> : <EyeIcon />}
            </div>
          </div>

          <Button type="primary" text="الدخول" />

          <p className={styles.text}>لا يوجد لديك حساب علي هين ؟</p>
          <Link className={styles.signin} to={"/signup"}>
            إنشاء حساب جديد
          </Link>
        </form>
      </div>
    </Section>
  );
};

export default Signin;
