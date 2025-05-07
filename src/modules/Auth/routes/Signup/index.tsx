import React from "react";
import styles from "./styles.module.scss";
import { Section } from "@/shared/components/Section";
import { HeadForm } from "../../components/HeadForm";
import { MainButton } from "@/shared/components/MainButton";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <Section>
      <div className={styles.signupWrapper}>
        <HeadForm
          title="انشاء حساب جديد"
          desc="قم بإدخال بياناتك لإنشاء حساب جديد"
        />
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder=" ادخل الاسم "
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder=" ادخل رقم الجوال "
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" ادخل البريد الالكتروني "
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="ادخل كلمة المرور"
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="تأكيد كلمة المرور"
              required
            />
          </div>
          <MainButton text="إنشاء" />

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
