import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Section } from "@/shared/components/Section";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/components/MainButton";
import { useGetMyFollowers } from "./api/useGetMyFollowers";
import { useGetWhoFollow } from "./api/useGetWhoFollow";

const Followers = () => {
  const { t } = useTranslation();
  const { data: followersData } = useGetMyFollowers();
  const { data: whoFollowData } = useGetWhoFollow();
  const [changeFollowers, setChangeFollowers] = useState("followers");

  const handleChangeFollowers = () => {
    setChangeFollowers("followers");
  };

  const handleChangeFollowings = () => {
    setChangeFollowers("followings");
  };

  console.log(followersData, whoFollowData);

  return (
    <Section>
      <SectionTitle right title={t("followers.pageTitle")} />
      <div className={styles.btnsWrapper}>
        <Button
          type={changeFollowers === "followers" ? "primary" : "notActive"}
          text={t("followers.followers")}
          onClick={handleChangeFollowers}
        />
        <Button
          type={changeFollowers === "followings" ? "primary" : "notActive"}
          text={t("followers.followings")}
          onClick={handleChangeFollowings}
        />
      </div>
      <div className={styles.followersContainer}></div>
    </Section>
  );
};

export default Followers;
