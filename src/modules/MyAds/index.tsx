import { useGetMyAds } from "./api/useGetMyAds";
import { Section } from "@/shared/components/Section";
import { PageTitle } from "@/shared/components/PageTitle";
import styles from "./styles.module.scss";
import { Button } from "@/shared/components/MainButton";
import { useTranslation } from "react-i18next";

const MyAds = () => {
  const { t } = useTranslation();
  const { data } = useGetMyAds();
  console.log(data);
  return (
    <Section>
      <PageTitle title={"اعلاناتي"} />
      <div className={styles.btnsWrapper}>
        <Button type="primary" text={t("myAds.addNewAd")} />
        <Button type="primary" text="اضافة اعلان جديد" />
      </div>
    </Section>
  );
};

export default MyAds;
