import { useState } from "react";
import { Section } from "@/shared/components/Section";
import { HeadForm } from "../../components/HeadForm";
import { useTranslation } from "react-i18next";
import codeImage from "@public/images/auth/otp.png";
import { OtpInput } from "./components/OtpInput";
import { Button } from "@/shared/components/Button";
import useActivateCode from "../../api/useActivateCode";
import Cookies from "js-cookie";
import styles from "./styles.module.scss";

const ValidationCode = () => {
  const { t } = useTranslation();
  const [otpCode, setOtpCode] = useState("");

  const { mutateAsync } = useActivateCode();

  const handleSubmitOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await mutateAsync({
        mobile: localStorage.getItem("phone") || "0512345671",
        code: otpCode,
      });

      Cookies.set("access_token", response.access_token, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <div className={styles.authWrapper}>
        <figure className={styles.codeImage}>
          <img src={codeImage} alt="code-image" />
        </figure>

        <HeadForm
          title={t("auth.twoFactorAuthTitle")}
          desc={t("auth.twoFactorAuthSubtitle")}
        />

        <form onSubmit={handleSubmitOtp}>
          <OtpInput length={5} onComplete={(code) => setOtpCode(code)} />
          <Button type="primary" text={t("auth.virify")} />
        </form>
      </div>
    </Section>
  );
};

export default ValidationCode;
