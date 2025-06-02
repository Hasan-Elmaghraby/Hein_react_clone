import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { FavoritesIcon } from "@/shared/icons/Favorites";
import { useTranslation } from "react-i18next";
import { WaitingIcon } from "@/shared/icons/WaitingIccon";
import { Button } from "@/shared/components/MainButton";
import { TrashIcon } from "@/shared/icons/Trash";

interface Props {
  title: string;
  time?: string;
  area: string;
  userImage?: string;
  userName?: string;
  price: string;
  icon?: boolean;
  user?: boolean;
  footerOptions?: boolean;
  active?: boolean;
  onDelete?: () => void;
}

export const CardInfo: React.FC<Props> = ({
  title,
  time,
  area,
  userImage,
  userName,
  price,
  icon,
  user,
  footerOptions,
  active,
  onDelete,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.info}>
      <Link className={styles.titleLink} to="/productDetails">
        <h3 className={styles.title}>{title}</h3>
      </Link>

      <p className={styles.description}>
        {time}
        {`${area ? "   / " : ""}${area ?? ""}`}
      </p>

      {user && (
        <div className={styles.user}>
          <figure className={styles.userImage}>
            <img src={userImage} loading="lazy" alt={userName} />
          </figure>

          <h5 className={styles.userName}>{userName}</h5>
        </div>
      )}

      <div className={styles.footer}>
        <p className={styles.price}>
          {price}
          {t("currency")}
        </p>
        {icon && (
          <figure className={styles.icon}>
            <FavoritesIcon />
          </figure>
        )}
      </div>
      {footerOptions && (
        <div className={styles.footerOptions}>
          {!active ? (
            <div className={styles.waiting}>
              <WaitingIcon />
              {"بانتظار المراجعة من الادارة"}
            </div>
          ) : (
            <div className={styles.buttons}>
              <Button type="editAds">
                <Link className={styles.editLink} to={"/editAd"}>
                  {t("myAds.edit")}
                </Link>
              </Button>
              <Button
                type="danger"
                icon={<TrashIcon className="trash" />}
                onClick={onDelete}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
