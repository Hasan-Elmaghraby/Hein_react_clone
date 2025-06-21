import styles from "./styles.module.scss";
import { Section } from "@/shared/components/Section";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useTranslation } from "react-i18next";
import { ExclamationMarkIcon } from "@/shared/icons/ExclamationMark";
import { PackagesCard } from "./components/PackagesCard";
import { useGetPlans } from "./apis/useGetPlans";
import { useSubscribePlan } from "./apis/useSubscribePlan";
import { toast } from "react-toastify";
import { useTabTitle } from "@/shared/hooks/useTabTitle";

const Packages = () => {
  useTabTitle("packages");
  const { t } = useTranslation();
  const { data } = useGetPlans();
  const { plans } = data || {};

  const { mutateAsync, data: dataSubscribe } = useSubscribePlan();

  const handleClickSubscribe = async (id: number) => {
    try {
      mutateAsync(id);
      toast.success(dataSubscribe?.message);
    } catch (error) {
      console.error("Failed to subscribe plan:", error);
    }
  };

  return (
    <Section>
      <SectionTitle right title={t("packages.pageTitle")} />
      <p className={styles.caution}>
        <ExclamationMarkIcon /> {t("packages.noSubscribe")}
      </p>
      <p className={styles.description}>{t("packages.optionTitle")}</p>
      <div className={styles.packages}>
        {plans?.map(({ id, title, details, price, currency, ended_at }) => (
          <PackagesCard
            key={id}
            title={title}
            period_text={details?.period_text}
            price={price}
            currency={currency}
            ended_at={ended_at || ""}
            onClickSubscribe={() => handleClickSubscribe(id)}
          />
        ))}
      </div>
    </Section>
  );
};

export default Packages;
