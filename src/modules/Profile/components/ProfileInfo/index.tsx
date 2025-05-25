import { StarIcon } from "@/shared/icons/Star";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ChevronLeftIcon } from "@/shared/icons/ChevronLeft";

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

  return (
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
          <Link className={styles.ratesLink} to="/myRates">
            {t("account.showMyRate")} <ChevronLeftIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
