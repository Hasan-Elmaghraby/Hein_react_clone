import React, { useState } from "react";
import { Section } from "@/shared/components/Section";
import styles from "./styles.module.scss";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useTranslation } from "react-i18next";
import walletImage from "@public/images/pages/wallet.png";
import { Image } from "@/shared/components/Image";
import { Button } from "@/shared/components/MainButton";
import { AddIcon } from "@/shared/icons/Add";
import { RechargedCard } from "./components/RechargedCard";
import { useGetWallet } from "./apis/useGetWallet";
import { Modal } from "@/shared/components/Modal";

const Wallet: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const { data } = useGetWallet();
  const { balance, wallet_actions } = data || {};

  return (
    <Section>
      <SectionTitle right title={t("header.wallet")} />
      <div className={styles.wallet}>
        <Image src={walletImage} alt="wallet" maxWidth="200px" />
        <div className={styles.info}>
          <h3 className={styles.title}>{t("wallet.walletBalance")}</h3>
          <p className={styles.price}>
            {balance}
            <span>{t("currency")}</span>
          </p>
          <Button
            type="primary"
            text={t("wallet.recharge")}
            icon={<AddIcon />}
            onClick={() => {
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>

      <div className={styles.records}>
        <h3 className={styles.recordsTitle}>{t("wallet.records")}</h3>
        <p className={styles.recordsSubtitle}>{t("wallet.recordsDetails")}</p>

        <div className={styles.recordsCards}>
          {wallet_actions?.map(({ id, created_at, action }) => (
            <RechargedCard key={id} createdAt={created_at} action={action} />
          ))}
        </div>
      </div>
      <Modal
        onClose={() => {
          setIsModalOpen(false);
        }}
        isOpen={isModalOpen}
      >
        <div className={styles.walletModal}>
          <AddIcon />
          <h4>{t("wallet.rechargeWallet")}</h4>
          <p>{t("wallet.chargeContent")}</p>
        </div>
      </Modal>
    </Section>
  );
};

export default Wallet;
