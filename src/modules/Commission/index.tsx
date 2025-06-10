import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Section } from "@/shared/components/Section";
import { SectionTitle } from "@/shared/components/SectionTitle";
import styles from "./styles.module.scss";
import { Image } from "@/shared/components/Image";
import commissionImage from "@public/images/pages/commission.png";
import { Input } from "./components/Input";
import { usePostCalculateCommission } from "./apis/usepostCalculateCommission";
import Loader from "@/shared/components/Loader";
import { Checkbox } from "./components/Checkbox";

const Commission = () => {
  const { mutateAsync, data, isPending } = usePostCalculateCommission();
  const { t } = useTranslation();
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (price === "") setTotal(0);
  }, [price, total]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    if (data) {
      setTotal(data.value);
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await mutateAsync(price);
      setTotal(data.value);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Section>
      <SectionTitle right title={t("commission.name")} />
      <div className={styles.commissionWrapper}>
        <Image src={commissionImage} alt="commission" maxWidth="14.6rem" />
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>{t("commission.title")}</h2>
          <p className={styles.subtitle}>{t("commission.subtitle")}</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              type="number"
              value={price}
              onChange={handleChange}
              name="price"
              placeholder={t("commission.placeholder")}
            />

            {price && (
              <div className={styles.showCalculation}>
                <span>{t("commission.calculateCommission")}</span>
                {isPending ? <Loader /> : <span>{total}</span>}
              </div>
            )}
          </form>
          <form className={styles.form}>
            <h3 className={styles.optionTitle}>
              {t("commission.paymentOptions")}
            </h3>
            <Checkbox label={t("commission.option1")} name="option1" />
            <Checkbox label={t("commission.option2")} name="option2" />
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Commission;
