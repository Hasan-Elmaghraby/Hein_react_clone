import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/components/MainButton";
import { useUser } from "@/shared/context/UserContext";
import { EditIcon } from "@/shared/icons/Edit";
import { usePostEditProfile } from "../../api/usePostEditProfile";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const FormProfileInfo = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useUser();
  const { mutateAsync, data, isError, error } = usePostEditProfile();

  const [isEditing, setIsEditing] = useState(true);

  const [form, setForm] = useState({
    phone: user?.mobile,
    email: user?.email,
    activity: user?.info?.about ?? "لا يوجد وصف نشاط",
  });

  const { phone, email, activity } = form;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isEditing) {
        mutateAsync({
          name: user?.name || "",
          mobile: phone || "",
          email: email || "",
          info: {
            about: activity,
          },
        });
        console.log(data);
        if (data.active === true) {
          return;
        } else if (data.status === true) {
          setIsEditing(true);
          Cookies.set("mobile", phone as string, {
            expires: 40,
            secure: true,
            sameSite: "strict",
          });
          toast.success(data.message);
          navigate("/auth/validation?action=editProfile");
        }
      }
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  return (
    <div>
      <h2 className={styles.formTitle}>{t("account.profileInfo")}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input
            onChange={handleInputChange}
            value={phone}
            type="tel"
            name="phone"
            id="phone"
            required
            disabled={isEditing}
          />
          <label className={styles.label} htmlFor="phone">
            {t("editProfile.mobile")}
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            onChange={handleInputChange}
            value={email}
            type="email"
            name="email"
            id="email"
            required
            disabled={isEditing}
          />
          <label className={styles.label} htmlFor="email">
            {t("editProfile.email")}
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            onChange={handleInputChange}
            value={activity}
            type="text"
            name="activity"
            id="activity"
            required
            disabled={isEditing}
          />
          <label className={styles.label} htmlFor="activity">
            {t("editProfile.about")}
          </label>
        </div>

        <Button
          type={isEditing ? "edit" : "primary"}
          text={isEditing ? t("editProfile.title") : t("editProfile.save")}
          icon={isEditing && <EditIcon />}
          onClick={handleToggleEdit}
        />
      </form>
    </div>
  );
};
