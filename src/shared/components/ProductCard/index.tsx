import React from "react";
import styles from "./styles.module.scss";
import { MainImageCard } from "./components/MainImageCard";
import { CardInfo } from "./components/CardInfo";

interface Props {
  id: number | string;
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
  id,
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
        id={id}
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
