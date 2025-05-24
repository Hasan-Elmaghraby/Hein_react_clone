import { Section } from "@/shared/components/Section";
import { HeadForm } from "../../components/HeadForm";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/components/MainButton";
import { toast } from "react-toastify";
import { useChangePSW } from "./hooks/useChangePSW";
import pswImage from "@public/images/auth/forgetPassword.png";
import Cookies from "js-cookie";
import styles from "./styles.module.scss";
import { LockIcon } from "@/shared/icons/Lock";
import { EyeIcon } from "@/shared/icons/Eye";
import useResetPSW from "./api/useResetPSW";

const ChangePSW = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    showPassword,
    showConfirmPassword,
    toggleConfirmPasswordVisibility,
    togglePasswordVisibility,
    password,
    confirmPassword,
    handleInputChange,
    setForm,
  } = useChangePSW();

  const { mutateAsync } = useResetPSW();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setForm({ password: "", confirmPassword: "" });
    try {
      const response = await mutateAsync({
        code_id: Cookies.get("code_id") as string,
        password,
      });

      if (response.status) {
        toast.success(response.message);
        navigate("/");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <div className={styles.authWrapper}>
        <figure className={styles.pswImage}>
          <img src={pswImage} alt="forget password-image" />
        </figure>

        <HeadForm
          title={t("auth.forgetPassword")}
          desc={t("auth.forgetPasswordSubtitle")}
        />

        <form onSubmit={handleSubmit}>
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
          <Button type="primary" text={t("auth.forgetPasswordSubmit")} />
        </form>
      </div>
    </Section>
  );
};

export default ChangePSW;
