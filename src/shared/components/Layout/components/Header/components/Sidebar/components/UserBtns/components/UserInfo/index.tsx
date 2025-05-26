import React from "react";
import styles from "./styles.module.scss";
import { DropDownButtonArrowIcon } from "@/shared/icons/DropDownButtonArrow";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProfileIcon } from "@/shared/icons/Profile";
import { MyAdsIcon } from "@/shared/icons/MyAds";
import { FavoritesIcon } from "@/shared/icons/Favorites";
import { FollowersIcon } from "@/shared/icons/Followers";
import { PackagesIcon } from "@/shared/icons/Packages";
import { CommissionIcon } from "@/shared/icons/Commission";
import { LogOutIcon } from "@/shared/icons/Logout";
import { Modal } from "@/shared/components/Modal";
import { Button } from "@/shared/components/MainButton";

interface Props {
  userImage: string | undefined;
  userName: string | undefined;
  logout: () => void;
  onCloseModal: () => void;
  onClickModal: () => void;
  isModalOpen: boolean;
}

export const UserInfo: React.FC<Props> = ({
  userImage,
  userName,
  logout,
  onCloseModal,
  onClickModal,
  isModalOpen,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfoBtn}>
        <img src={userImage} alt={userName} />
        <DropDownButtonArrowIcon />
      </div>

      <div className={styles.userDropdown}>
        <ul className={`${styles.userDropdownList} ${styles.active}`}>
          <div className={styles.iconList}>
            <DropDownButtonArrowIcon />
          </div>
          <li className={styles.listItem}>
            <Link to="/profile">
              <ProfileIcon />
              {t("header.profile")}
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/myAds">
              <MyAdsIcon />
              {t("header.myAdvertisements")}
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/myAds">
              <FavoritesIcon />
              {t("header.favorites")}
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/myAds">
              <FollowersIcon />
              {t("header.followers")}
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/myAds">
              <PackagesIcon />
              {t("header.packages")}
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/myAds">
              <CommissionIcon />
              {t("header.siteCommission")}
            </Link>
          </li>
          <li
            className={`${styles.listItem} ${styles.logout}`}
            onClick={onClickModal}
          >
            <div className={styles.buttonLogout}>
              <LogOutIcon />
              {t("header.logout")}
            </div>
          </li>
        </ul>
      </div>
      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        <div className={styles.logOutModalIcon}>
          <LogOutIcon />
        </div>

        <h2 className={styles.modalTitle}> {t("header.logout")}</h2>
        <p className={styles.modalText}>{t("logoutMessage")}</p>
        <Button type="danger" text={t("header.logout")} onClick={logout} />
      </Modal>
    </div>
  );
};
