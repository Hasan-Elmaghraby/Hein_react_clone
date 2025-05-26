import React from "react";
import styles from "./styles.module.scss";
import { Section } from "@/shared/components/Section";
import { HeadForm } from "../../components/HeadForm";
import { Button } from "@/shared/components/MainButton";
import { EyeIcon } from "@/shared/icons/Eye";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "./hooks/useSignup";
import { LockIcon } from "@/shared/icons/Lock";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import useSignUp from "./api/useSignUp";

const Signup: React.FC = () => {
  const { mutateAsync } = useSignUp();
  const navigate = useNavigate();

  const {
    showPassword,
    showConfirmPassword,
    toggleConfirmPasswordVisibility,
    togglePasswordVisibility,
    userName,
    phone,
    email,
    password,
    confirmPassword,
    handleInputChange,
    setForm,
  } = useSignup();

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

      console.log(response.data?.code);
      Cookies.set("mobile", phone, {
        expires: 40,
        secure: true,
        sameSite: "strict",
      });
      Cookies.set("code", response.data?.code, {
        expires: 40,
        secure: true,
        sameSite: "strict",
      });

      if (response.status) {
        toast.success(response.message);
        navigate("/auth/validation?action=signup");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <div className={styles.auth}>
        <HeadForm
          title="انشاء حساب جديد"
          desc="قم بإدخال بياناتك لإنشاء حساب جديد"
        />
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <input
              onChange={handleInputChange}
              value={userName}
              type="text"
              name="userName"
              id="userName"
              placeholder=" ادخل الاسم "
              required
            />
          </div>
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
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder=" ادخل البريد الالكتروني "
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
          <div className={styles.inputWrapper}>
            <input
              onChange={handleInputChange}
              value={confirmPassword}
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="تأكيد كلمة المرور"
              required
            />
            <div
              className={styles.eyeIcon}
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <LockIcon /> : <EyeIcon />}
            </div>
          </div>
          <Button type="primary" text="إنشاء" />

          <p className={styles.text}>لديك حساب علي هين؟</p>
          <Link className={styles.signin} to={"/signin"}>
            تسجيل الدخول
          </Link>
        </form>
      </div>
    </Section>
  );
};

export default Signup;
