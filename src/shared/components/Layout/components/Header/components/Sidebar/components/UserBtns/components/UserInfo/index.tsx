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

interface Props {
  userImage: string | undefined;
  userName: string | undefined;
}

export const UserInfo: React.FC<Props> = ({ userImage, userName }) => {
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
          <li className={`${styles.listItem} ${styles.logout}`}>
            <Link to="/myAds">
              <LogOutIcon />
              {t("header.logout")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
