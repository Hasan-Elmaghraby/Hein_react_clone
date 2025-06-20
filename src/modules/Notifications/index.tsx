import { Section } from "@/shared/components/Section";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useGetNotifications } from "./apis/useGetNotifications";
import { Empty } from "@/shared/components/Empty";
import notificationImage from "@public/images/notification/notificationEmptyPage.png";
import Loader from "@/shared/components/Loader";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { NotificationCard } from "./components/NotificationCard";

interface NotificationProps {
  created_at: string;
  text: string;
  title: string;
}

const Notifications = () => {
  const { t } = useTranslation();
  const { data: notifications, isLoading } = useGetNotifications();

  if (isLoading) <Loader />;
  return (
    <Section>
      <SectionTitle right title={t("notifications.title")} />
      {notifications?.length === 0 ? (
        <Empty src={notificationImage} text={t("notifications.emptyTitle")} />
      ) : (
        <div className={styles.notifications}>
          {notifications?.map(
            ({ created_at, text, title }: NotificationProps) => (
              <NotificationCard title={title} text={text} time={created_at} />
            )
          )}
        </div>
      )}
    </Section>
  );
};

export default Notifications;
