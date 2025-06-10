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
import { usePostChargeWallet } from "./apis/usePostChargeWallet";
import { Modal } from "@/shared/components/Modal";
import { WalletIcon } from "@/shared/icons/Wallet";
import Loader from "@/shared/components/Loader";

const Wallet: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState<string>("");

  const { t } = useTranslation();

  const { data, isLoading } = useGetWallet();
  const { balance, wallet_actions } = data || {};

  const { mutateAsync } = usePostChargeWallet();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await mutateAsync(amount);

      if (response.status && response.data) {
        window.location.href = response.data;
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Charge failed:", error);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <Section>
      <SectionTitle right title={t("header.wallet")} />
      <div className={styles.wallet}>
        <Image src={walletImage} alt="wallet" maxWidth="200px" />
        <div className={styles.info}>
          {balance === 0 ? (
            <h3 className={styles.titleNoBalance}>
              {t("wallet.noWalletBalance")}
            </h3>
          ) : (
            <h3 className={styles.title}>{t("wallet.walletBalance")}</h3>
          )}
          <p className={`${styles.price} ${balance === 0 && styles.noPrice}`}>
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

        <div
          className={
            wallet_actions?.length === 0
              ? styles.noRecords
              : styles.recordsCards
          }
        >
          {wallet_actions?.length === 0 && (
            <>
              <div className={styles.iconWrapper}>
                <WalletIcon />
              </div>
              <p className={styles.emptyText}>{t("wallet.noTransactions")}</p>
            </>
          )}
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
          <h4 className={styles.title}>{t("wallet.rechargeWallet")}</h4>
          <p className={styles.description}>{t("wallet.chargeContent")}</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.input}>
              <input
                type="number"
                name="amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount || ""}
                id="amount"
                placeholder="أدخل قيمة المبلغ"
              />
            </div>
            <Button type="primary" text={t("wallet.recharge")} />
          </form>
        </div>
      </Modal>
    </Section>
  );
};

export default Wallet;
