import React from "react";
import styles from "./styles.module.scss";
import { ProductCard } from "@/shared/components/ProductCard";
import { Related } from "@/shared/model/SingleProduct";
import { useTranslation } from "react-i18next";

interface Props {
  ads: Related[];
}
export const SimilarAds: React.FC<Props> = ({ ads }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.similarAdsWrapper}>
      <h2 className={styles.title}>{t("productDetails.similarAds")}</h2>
      <div className={styles.similarAds}>
        {ads.map((ad) => (
          <ProductCard
            key={ad.id}
            id={ad.id}
            mainImage={ad.image}
            userImage={ad.user.image}
            title={ad.title}
            userName={ad.user.name}
            price={ad.price}
            time={ad.time_ago}
            area={ad.area?.name}
            categoryName={ad.category.name}
          />
        ))}
      </div>
    </div>
  );
};
