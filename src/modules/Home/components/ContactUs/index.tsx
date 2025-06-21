import React from "react";
import { Section } from "@/shared/components/Section";
import imageContactUs from "@public/images/contact/contact.png";
import styles from "./styles.module.scss";
import { Form } from "./components/Form";
import { useForm } from "./hooks/useForm";
import { FormHead } from "./components/FormHead";
import { usePostContactUs } from "../../api/usePostContactUs";
import { toast } from "react-toastify";

export const ContactUs: React.FC = () => {
  const { userName, phone, email, message, onChange, setForm } = useForm();

  const { mutateAsync, data, isPending } = usePostContactUs();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await mutateAsync({
        name: userName,
        email,
        mobile: phone,
        message: message,
      });
      toast.success(data.message);
      setForm({ userName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section id="contact">
      <div className={styles.contactUsWrapper}>
        <figure className={styles.image}>
          <img src={imageContactUs} alt="" />
        </figure>

        <div className={styles.formWrapper}>
          <FormHead
            title="اتصل بنا"
            description=" يمكنك إرسال شكوتك أو مقترحاتك قم بملأ بيانات رسالتك وأرسل الآن"
          />
          <Form
            userName={userName}
            phone={phone}
            email={email}
            message={message}
            onChange={onChange}
            onSubmit={onSubmit}
            disabled={isPending}
          />
        </div>
      </div>
    </Section>
  );
};
