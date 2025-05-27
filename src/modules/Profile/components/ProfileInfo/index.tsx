import { StarIcon } from "@/shared/icons/Star";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { ChevronLeftIcon } from "@/shared/icons/ChevronLeft";
import { useState } from "react";
import { MyRatesModal } from "../MyRatesModal";

interface ProfileInfoProps {
  userName: string;
  userImage: string;
  rateNumber: string;
}
export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  userName,
  userImage,
  rateNumber,
}) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const handleClickModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.profileInfoWrapper}>
        <figure className={styles.profileImage}>
          <img src={userImage} alt={userName} />
        </figure>
        <div className={styles.profileInfo}>
          <h3 className={styles.name}>{userName}</h3>
          <div className={styles.ratesWrapper}>
            <div className={styles.rates}>
              <StarIcon /> <span>{rateNumber}</span>
            </div>
            <div
              role="button"
              className={styles.ratesBtn}
              onClick={handleClickModal}
            >
              {t("account.showMyRate")} <ChevronLeftIcon />
            </div>
          </div>
        </div>
      </div>
      <MyRatesModal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        rateNumber={rateNumber}
        userName={userName}
        useImage={userImage}
      />
    </>
  );
};
