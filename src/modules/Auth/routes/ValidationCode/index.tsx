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
import useResetCode from "./api/useResetCode";
import { useUser } from "@/shared/context/UserContext";

const ValidationCode = () => {
  const { setUser } = useUser();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const action = params.get("action");

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [otpCode, setOtpCode] = useState(Cookies.get("code") as string);

  const { mutateAsync } = useActivateCode();
  const { mutateAsync: mutateAsyncReset } = useResetCode();

  const handleSubmitOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const mobile = Cookies.get("mobile") as string;

      if (action === "reset") {
        const response = await mutateAsyncReset({
          mobile,
          code: otpCode,
        });

        if (response.status) {
          toast.success(response.message);

          Cookies.set("code_id", response.data.code_id, {
            expires: 200,
            secure: true,
            sameSite: "strict",
          });

          navigate("/auth/change-password");
        } else {
          toast.error(response.message);
        }

        return;
      }

      if (action === "signup" || action === "editProfile") {
        const response = await mutateAsync({
          mobile,
          code: otpCode,
        });

        Cookies.set("access_token", response.access_token, {
          expires: 200,
          secure: true,
          sameSite: "strict",
        });

        console.log(response);

        if (response.status) {
          toast.success(response.message);

          Cookies.set("access_token", response.data.access_token, {
            expires: 200,
            secure: true,
            sameSite: "strict",
          });
          setUser(response.data);
          navigate("/");
        } else {
          toast.error(response.message);
        }
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
