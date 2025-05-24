import { Section } from "@/shared/components/Section";
import { HeadForm } from "../../components/HeadForm";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/components/MainButton";
import { toast } from "react-toastify";
import { useForgetPSW } from "./hooks/useForgetPSW";
import useResendCode from "./api/useResendCode";
import pswImage from "@public/images/auth/forgetPassword.png";
import Cookies from "js-cookie";
import styles from "./styles.module.scss";

const ForgetPSW = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { phone, handleInputChange } = useForgetPSW();

  const { mutateAsync } = useResendCode();

  const handleSubmitOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await mutateAsync({
        mobile: phone,
      });

      Cookies.set("mobile", phone);
      // Cookies.set("access_token", response.access_token, {
      //   expires: 40,
      //   secure: true,
      //   sameSite: "strict",
      // });

      if (response.status) {
        toast.success(response.message);
        navigate("/auth/validation?action=reset");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "An Error occurred";
      toast.error(message);
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

        <form onSubmit={handleSubmitOtp}>
          <div className={styles.inputWrapper}>
            <input
              onChange={handleInputChange}
              value={phone}
              type="tel"
              name="phone"
              id="phone"
              placeholder=" ادخل رقم الجوال"
              required
            />
          </div>
          <Button type="primary" text={t("auth.forgetPasswordSubmit")} />
        </form>
      </div>
    </Section>
  );
};

export default ForgetPSW;
