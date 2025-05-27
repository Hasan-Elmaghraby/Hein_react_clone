import React, { useState } from "react";
import styles from "./styles.module.scss";
import { StarIcon } from "@/shared/icons/Star";
import { useTranslation } from "react-i18next";
import { UserRatesModal } from "@/modules/ProductDetails/components/ProductInfo/components/UserRatesModal";
import { UserRateModal } from "../../../UserRateModal";

interface Props {
  userImage: string;
  userName: string;
  rateNumber: string;
  userId: number;
}

export const UserInfo: React.FC<Props> = ({
  userImage,
  userName,
  rateNumber,
  userId,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isRateOpen, setIsRateOpen] = useState(false);

  const handleClickModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleClickRateModal = () => {
    setIsRateOpen(true);
  };
  const handleCloseRateModal = () => {
    setIsRateOpen(false);
  };

  return (
    <>
      <div className={styles.userInfo}>
        <figure className={styles.userImage} onClick={handleClickModal}>
          {userImage && <img src={userImage} alt={userName} loading="lazy" />}
        </figure>
        <div className={styles.userNameWrapper}>
          <div className={styles.userName}>
            <h4 className={styles.title}>
              {t("productDetails.announcerDetails")}
            </h4>
            <p className={styles.name}>{userName}</p>
          </div>
          <div className={styles.rate} onClick={handleClickRateModal}>
            <StarIcon />

            <p className={styles.rateNumber}>{rateNumber}</p>
          </div>
        </div>
      </div>
      <UserRatesModal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        userId={userId}
      />
      <UserRateModal
        isOpen={isRateOpen}
        handleCloseModal={handleCloseRateModal}
        userId={userId}
      />
    </>
  );
};
