import { useGetMyAds } from "./api/useGetMyAds";
import { Section } from "@/shared/components/Section";
import { PageTitle } from "@/shared/components/PageTitle";
import styles from "./styles.module.scss";
import { Button } from "@/shared/components/MainButton";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ProductCard } from "@/shared/components/ProductCard";
import Loader from "@/shared/components/Loader";
import { useTabTitle } from "@/shared/hooks/useTabTitle";

const MyAds = () => {
  useTabTitle("myAds");

  const [activeNumber, setActiveNumber] = useState(0);
  const [adsData, setAdsData] = useState([]);
  const { t } = useTranslation();

  const { data, isLoading } = useGetMyAds(activeNumber);

  useEffect(() => {
    if (data) {
      setAdsData(data);
    }
  }, [data, activeNumber]);

  const handleClickCurrentAds = () => {
    setActiveNumber(1);
  };

  const handleClickWaitingAds = () => {
    setActiveNumber(0);
  };

  return (
    <Section>
      <PageTitle title={t("myAds.title")} />
      <div className={styles.btnsWrapper}>
        <Button
          type={activeNumber === 0 ? "notActive" : "primary"}
          text={t("myAds.currentAds")}
          onClick={handleClickCurrentAds}
        />
        <Button
          type={activeNumber === 1 ? "notActive" : "primary"}
          text={t("myAds.waitingAds")}
          onClick={handleClickWaitingAds}
        />
      </div>
      {!isLoading ? (
        <div className={styles.adsContainer}>
          {adsData.map(
            ({ id, title, time_ago, price, mainImage, category, area }) => (
              <ProductCard
                key={id}
                id={id}
                title={title}
                time={time_ago}
                price={price}
                mainImage={mainImage}
                categoryName={(category as { name: string })?.name}
                area={(area as { name: string })?.name}
                footerOptions
                active={activeNumber === 1}
                onDelete={() => console.log("delete")}
              />
            )
          )}
        </div>
      ) : (
        <Loader />
      )}
    </Section>
  );
};

export default MyAds;
