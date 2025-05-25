import { PageTitle } from "@/shared/components/PageTitle";
import { Section } from "@/shared/components/Section";
import { useTranslation } from "react-i18next";
import { ProfileInfo } from "./components/ProfileInfo";
import { useUser } from "@/shared/context/UserContext";

const Profile = () => {
  const { t } = useTranslation();
  const { user } = useUser();

  return (
    <Section>
      <PageTitle title={t("account.title")} />
      <ProfileInfo
        userName={user?.name || ""}
        userImage={user?.image || ""}
        rateNumber={user?.rate || ""}
      />
    </Section>
  );
};

export default Profile;
