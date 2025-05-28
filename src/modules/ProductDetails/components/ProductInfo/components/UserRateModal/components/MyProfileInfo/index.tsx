import React, { useState } from "react";
import styles from "./styles.module.scss";
import { StarIcon } from "@/shared/icons/Star";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/components/MainButton";
import { usePostRate } from "@/modules/ProductDetails/api/usePostRate";
import { toast } from "react-toastify";

interface Props {
  userName: string;
  userImage: string;
  userId: string;
  handleCloseModal: () => void;
}

export const MyProfileInfo: React.FC<Props> = ({
  userName,
  userImage,
  userId,
}) => {
  const { t } = useTranslation();
  const [comment, setComment] = useState("");
  const [userRateComment, setUserRateComment] = useState(0);

  const { data, mutateAsync } = usePostRate(userId);

  const handleSelect = (index: number) => {
    setUserRateComment((prev) => (prev === index + 1 ? 0 : index + 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await mutateAsync({ rate: userRateComment });
      toast.success(data?.message);
    } catch {
      toast.error(data?.message);
    }
  };

  return (
    <div>
      <div className={styles.profileInfoWrapper}>
        <figure className={styles.profileImage}>
          <img src={userImage} alt={userName} />
        </figure>
        <div className={styles.profileInfo}>
          <h3 className={styles.infoTitle}>
            {t("productDetails.announcerDetails")}
          </h3>
          <h3 className={styles.name}>{userName}</h3>
        </div>
      </div>
      <p className={styles.message}>{t("productDetails.announcerMessage")}</p>
      <div className={styles.ratesWrapper}>
        <div className={styles.rate}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className={`${styles.svg} ${
                index < userRateComment ? styles.active : ""
              }`}
            >
              <StarIcon />
            </div>
          ))}
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="hidden" name="rate" value={userRateComment} />
        <textarea
          className={styles.commentTextarea}
          name="comment"
          id="comment"
          value={comment}
          placeholder={t("productDetails.commentPlaceholder")}
          onChange={handleChange}
        ></textarea>
        <Button type="primary" text={t("productDetails.submit")} />
      </form>
    </div>
  );
};
