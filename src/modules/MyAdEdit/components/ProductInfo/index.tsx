import React from "react";
import { EditBtns } from "./components/EditBtns";
import styles from "./styles.module.scss";

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
  userId: number;
}

export const ProductInfo: React.FC<Props> = ({
  title,
  time_ago,
  area,
  price,
  content,
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
      <EditBtns onDelete={() => {}} />
    </div>
  );
};
