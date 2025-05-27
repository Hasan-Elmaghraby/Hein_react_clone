import React from "react";
import { Modal } from "@/shared/components/Modal";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { MyProfileInfo } from "./components/MyProfileInfo";

interface Props {
  isOpen: boolean;
  handleCloseModal: () => void;
  userName: string;
  useImage: string;
  rateNumber: string;
}

export const MyRatesModal: React.FC<Props> = ({
  isOpen,
  handleCloseModal,
  userName,
  useImage,
  rateNumber,
}) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <h3 className={styles.modalTitle}>{t("account.myRates")}</h3>
      <MyProfileInfo
        rateNumber={rateNumber}
        userName={userName}
        userImage={useImage}
      />
    </Modal>
  );
};
