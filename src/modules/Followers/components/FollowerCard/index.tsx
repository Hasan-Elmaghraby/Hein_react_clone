import React from "react";
import { Image } from "@/shared/components/Image";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { StarIcon } from "@/shared/icons/Star";
import { ChevronLeftIcon } from "@/shared/icons/ChevronLeft";
import { AddFollowerIcon } from "@/shared/icons/AddFollower";

interface Props {
  withIcon?: boolean;
  image: string;
  userName: string;
  rate: number;
}

export const FollowerCard: React.FC<Props> = ({ withIcon ,image,userName,rate}) => {
  return (
    <div className={styles.followerCard}>
      <div className={styles.whoFollowWrapper}>
        <div className={styles.followerCardWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={image} alt={userName} />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>{userName}</h3>
            <p className={styles.rate}>
              <StarIcon />
             {rate}
            </p>
            <Link to={"/announcerDetails"} className={styles.textLink}>
              عرض تفاصيل الملف الشخصي <ChevronLeftIcon />
            </Link>
          </div>
        </div>
        {withIcon && (
          <div role="button" className={styles.iconWhoFollowWrapper}>
            <AddFollowerIcon />
          </div>
        )}
      </div>
    </div>
  );
};
