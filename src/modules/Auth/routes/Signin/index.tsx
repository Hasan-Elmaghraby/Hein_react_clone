import React from "react";
import styles from "./styles.module.scss";
import { Section } from "@/shared/components/Section";
import { HeadForm } from "../../components/HeadForm";
import { Button } from "@/shared/components/MainButton";
import { EyeIcon } from "@/shared/icons/Eye";
import { Link, useNavigate } from "react-router-dom";
import { useSignin } from "./hooks/useSignin";
import { LockIcon } from "@/shared/icons/Lock";
import useSigninApi from "./api/useSigninApi";
import { toast } from "react-toastify";

const Signin: React.FC = () => {
  const { mutateAsync } = useSigninApi();
  const navigate = useNavigate();

  const {
    showPassword,
    togglePasswordVisibility,
    phone,
    password,
    handleInputChange,
    setForm,
  } = useSignin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setForm({
      phone: "",
      password: "",
    });
    try {
      const response = await mutateAsync({
        mobile: phone,
        password,
      });

      if (response.status === true) {
        toast.success(response.message);

        navigate("/");
      }
      if (response.status === false) {
        toast.error(response.message);
      }
    } catch {
      toast.error("حدث خطأ ما");
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

          <Link className={styles.forgetPswLink} to={"/auth/forgetPassword"}>
            هل نسيت كلمة المرور
          </Link>
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
