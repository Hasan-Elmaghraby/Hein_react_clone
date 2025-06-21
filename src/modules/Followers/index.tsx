import { useState } from "react";
import { Section } from "@/shared/components/Section";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/components/MainButton";
import { useGetMyFollowers } from "./api/useGetMyFollowers";
import { useGetWhoFollow } from "./api/useGetWhoFollow";
import { FollowerCard } from "./components/FollowerCard";
import { Empty } from "@/shared/components/Empty";
import userImage from "@public/images/userPlaceholderImage.png";
import noDataFollowerImage from "@public/images/followers/noData.png";
import styles from "./styles.module.scss";
import { useTabTitle } from "@/shared/hooks/useTabTitle";

const testData = [
  { id: 5, userName: "أحمد رامي", rate: 4.2, image: userImage },
  { id: 3, userName: "أحمد رامي", rate: 3, image: userImage },
  { id: 2, userName: "أحمد رامي", rate: 4.2, image: userImage },
  { id: 4, userName: "أحمد رامي", rate: 4.2, image: userImage },
];

const Followers = () => {
  useTabTitle("followers");
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
      <div className={styles.followersContainer}>
        {changeFollowers === "followings" && whoFollowData?.length > 0
          ? testData.map(({ id, userName, rate, image }) => (
              <FollowerCard
                key={id}
                userName={userName}
                image={image}
                rate={rate}
              />
            ))
          : changeFollowers === "followings" && (
              <Empty
                src={noDataFollowerImage}
                text={"لا يوجد احد انت تتابعه"}
              />
            )}
        {changeFollowers === "followers" && followersData?.length > 0
          ? testData.map(({ id, userName, rate, image }) => (
              <FollowerCard
                withIcon
                key={id}
                userName={userName}
                image={image}
                rate={rate}
              />
            ))
          : changeFollowers === "followers" && (
              <Empty src={noDataFollowerImage} text={"لا يوجد متابعين"} />
            )}
      </div>
    </Section>
  );
};

export default Followers;
