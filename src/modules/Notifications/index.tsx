import { Section } from "@/shared/components/Section";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useGetNotifications } from "./apis/useGetNotifications";
import { Empty } from "@/shared/components/Empty";
import notificationImage from "@public/images/notifications/notificationEmptyPage.png";
import Loader from "@/shared/components/Loader";
import { useTranslation } from "react-i18next";
const Notifications = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetNotifications();

  if (isLoading) <Loader />;
  return (
    <Section>
      <SectionTitle right title={t("notifications.title")} />
      {data?.length === 0 && (
        <Empty src={notificationImage} text={t("notifications.emptyTitle")} />
      )}
    </Section>
  );
};

export default Notifications;
