import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { FavoritesIcon } from "@/shared/icons/Favorites";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  time: string;
  area: string;
  userImage: string;
  userName: string;
  price: string;
}

export const CardInfo: React.FC<Props> = ({
  title,
  time,
  area,
  userImage,
  userName,
  price,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.info}>
      <Link className={styles.titleLink} to="/profile">
        <h3 className={styles.title}>{title}</h3>
      </Link>

      <p className={styles.description}>
        {time}
        {`${area ? "   / " : ""}${area ?? ""}`}
      </p>

      <div className={styles.user}>
        <figure className={styles.userImage}>
          <img src={userImage} loading="lazy" alt={userName} />
        </figure>

        <h5 className={styles.userName}>{userName}</h5>
      </div>

      <div className={styles.footer}>
        <p className={styles.price}>
          {price}
          {t("currency")}
        </p>
        <figure className={styles.icon}>
          <FavoritesIcon />
        </figure>
      </div>
    </div>
  );
};
