import { PageTitle } from "@/shared/components/PageTitle";
import { Section } from "@/shared/components/Section";
import { useTranslation } from "react-i18next";
import { ProfileInfo } from "./components/ProfileInfo";
import { useUser } from "@/shared/context/UserContext";
import { ChangePSWLink } from "./components/ChangePSWLink";
import styles from "./styles.module.scss";
import { DeleteAccount } from "./components/DeleteAccount";

const Profile = () => {
  const { t } = useTranslation();
  const { user } = useUser();

  return (
    <Section>
      <PageTitle title={t("account.title")} />
      <div className={styles.accountHead}>
        <ProfileInfo
          userName={user?.name || ""}
          userImage={user?.image || ""}
          rateNumber={user?.rate || ""}
        />
        <ChangePSWLink />
        <DeleteAccount />
      </div>
    </Section>
  );
};

export default Profile;
