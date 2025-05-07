import React from "react";
import styles from "./styles.module.scss";
import { UserDetails } from "./components/UserDetails";

interface Props {
  title: string;
  time_ago: string;
  area: string;
  price: string;
  content: string;
  userImage: string;
  userName: string;
  rateNumber: string;
  userMail: string;
  userPhone: string;
}

export const ProductInfo: React.FC<Props> = ({
  title,
  time_ago,
  area,
  price,
  content,
  userImage,
  userName,
  rateNumber,
  userMail,
  userPhone,
}) => {
  return (
    <div className={styles.productInfoWrapper}>
      <div className={styles.productInfo}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.location}>
          {time_ago} {`${area ? "   / " : ""}${area ?? ""}`}
        </p>
        <p className={styles.price}>{price}</p>
        <p className={styles.description}>{content}</p>
      </div>

      <UserDetails
        userImage={userImage}
        userName={userName}
        rateNumber={rateNumber}
        userMail={userMail}
        userPhone={userPhone}
      />
    </div>
  );
};
