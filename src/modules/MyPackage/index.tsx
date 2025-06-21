import { Section } from "@/shared/components/Section";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useTranslation } from "react-i18next";
import packagesImage from "@public/images/pages/mainPackages.png";
import styles from "./styles.module.scss";
import { Image } from "@/shared/components/Image";
import { PackagesCard } from "./components/PackagesCard";
import { ClockIcon } from "@/shared/icons/ClockIcon";
import { HornIcon } from "@/shared/icons/Horn";
import { DollarIcon } from "@/shared/icons/Dollar";
import { useTabTitle } from "@/shared/hooks/useTabTitle";

const MyPackage = () => {
  useTabTitle("myPackages");
  const { t } = useTranslation();
  return (
    <Section>
      <SectionTitle right title={t("packages.pageTitle")} />
      <div className={styles.myPackages}>
        <Image src={packagesImage} alt="packages" maxWidth="100px" />
        <div className={styles.info}>
          <h3 className={styles.title}>{t("packages.titleSubscribe")}</h3>
          <h4 className={styles.packageName}>الباقة الاولي</h4>
          <p className={styles.endedAt}> ينتهي اشتراكك في 28/5/2025</p>
        </div>
      </div>

      <div className={styles.myPackagesCards}>
        <PackagesCard
          title={t("packages.durationDate")}
          titleIcon={<ClockIcon />}
          desc="ينتهي اشتراكك في 28/5/2025"
        />
        <PackagesCard
          title={t("packages.numberAds")}
          titleIcon={<HornIcon />}
          desc="ينتهي اشتراكك في 28/5/2025"
        />
        <PackagesCard
          title={t("packages.price")}
          titleIcon={<DollarIcon />}
          desc="ينتهي اشتراكك في 28/5/2025"
          price
        />
      </div>
    </Section>
  );
};

export default MyPackage;
