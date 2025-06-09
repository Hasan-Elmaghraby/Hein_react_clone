import React from "react";
import { Image } from "@/shared/components/Image";
import styles from "./styles.module.scss";
import packagesImage from "@public/images/pages/packages.png";
import { ClockIcon } from "@/shared/icons/ClockIcon";
import { HornIcon } from "@/shared/icons/Horn";
import { Button } from "@/shared/components/MainButton";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  ended_at: string;
  period_text: string;
  price: number;
  currency: string;
  onClickSubscribe?: () => void;
}
export const PackagesCard: React.FC<Props> = ({
  title,
  ended_at,
  period_text,
  price,
  currency,
  onClickSubscribe,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.packagesCard}>
      <Image src={packagesImage} alt="packages" maxWidth="100px" />
      <div className={styles.info}>
        <h3 className={styles.title}>{title} </h3>
        <div className={styles.description}>
          <p className={styles.time}>
            {ended_at}
            <ClockIcon />
          </p>
          <p className={styles.ads}>
            <HornIcon /> {period_text}
          </p>
        </div>
        <div className={styles.footerCard}>
          <p className={styles.price}>
            {price} {currency}
          </p>
          <Button
            type="primary"
            text={t("packages.btnSubscribe")}
            maxWidth="12rem"
            maxHeight="3.3rem"
            onClick={onClickSubscribe}
          />
        </div>
      </div>
    </div>
  );
};
