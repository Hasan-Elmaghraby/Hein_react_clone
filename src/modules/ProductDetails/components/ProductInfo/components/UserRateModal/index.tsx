import React from "react";
import { Modal } from "@/shared/components/Modal";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { MyProfileInfo } from "./components/MyProfileInfo";
import { useGetUserRates } from "../../../../api/useGetUserRates";

interface Props {
  isOpen: boolean;
  handleCloseModal: () => void;
  userId: number;
}

export const UserRateModal: React.FC<Props> = ({
  isOpen,
  handleCloseModal,
  userId,
}) => {
  const { t } = useTranslation();
  const { data } = useGetUserRates(userId);
  const { user } = data || {};

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <h3 className={styles.modalTitle}>
        {t("productDetails.announcerRates")}
      </h3>
      <MyProfileInfo
        rateNumber={user?.rate}
        userName={user?.name}
        userImage={user?.image}
      />
    </Modal>
  );
};
