import React from "react";
import { Section } from "@/shared/components/Section";
import styles from "./styles.module.scss";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useTranslation } from "react-i18next";
import walletImage from "@public/images/pages/wallet.png";
import { Image } from "@/shared/components/Image";

const Wallet: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <SectionTitle right title={t("header.wallet")} />
      <div className={styles.wallet}>
        <Image src={walletImage} alt="wallet" maxWidth="200px" />
        <div className={styles.info}>
          <p className={styles.title}>{t("wallet.title")}</p>
          <p className={styles.description}>{t("wallet.description")}</p>
        </div>
      </div>
    </Section>
  );
};

export default Wallet;
