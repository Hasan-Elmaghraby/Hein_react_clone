import { useState } from "react";
import { Section } from "@/shared/components/Section";
import { HeadForm } from "../../components/HeadForm";
import { useTranslation } from "react-i18next";
import codeImage from "@public/images/auth/otp.png";
import { OtpInput } from "./components/OtpInput";
import { Button } from "@/shared/components/MainButton";
import useActivateCode from "./api/useActivateCode";
import Cookies from "js-cookie";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const ValidationCode = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const action = params.get("action");

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [otpCode, setOtpCode] = useState(Cookies.get("code") as string);

  const { mutateAsync } = useActivateCode();

  const handleSubmitOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await mutateAsync({
        mobile: Cookies.get("mobile") as string,
        code: otpCode,
      });

      Cookies.set("access_token", response.access_token, {
        expires: 40,
        secure: true,
        sameSite: "strict",
      });

      if (response.status) {
        toast.success(response.message);

        Cookies.set("access_token", response.access_token, {
          expires: 40,
          secure: true,
          sameSite: "strict",
        });

        if (action === "signup") {
          navigate("/");
        } else if (action === "reset") {
          navigate("/change-password");
        } else {
          navigate("/");
        }
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An unknown error occurred.";
      toast.error(message);
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
