import React from "react";
import styles from "./styles.module.scss";
import { MainImageCard } from "./components/MainImageCard";
import { CardInfo } from "./components/CardInfo";

interface Props {
  mainImage: string;
  userImage: string;
  categoryName: string;
  title: string;
  userName: string;
  price: string;
  time: string;
  area: string;
}

export const ProductCard: React.FC<Props> = ({
  mainImage,
  title,
  userName,
  userImage,
  categoryName,
  price,
  time,
  area,
}) => {
  return (
    <div className={styles.productCard}>
      <MainImageCard
        mainImage={mainImage}
        categoryName={categoryName}
        title={title}
      />
      <CardInfo
        title={title}
        userName={userName}
        userImage={userImage}
        price={price}
        time={time}
        area={area}
      />
    </div>
  );
};
