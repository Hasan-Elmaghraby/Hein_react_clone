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
import { Radio } from "./components/Radio";

const Commission = () => {
  const { mutateAsync, data, isPending } = usePostCalculateCommission();
  const { t } = useTranslation();
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (price === "") setTotal(0);
  }, [price, total]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
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
            <Radio
              name="online"
              label={
                <div>
                  <h4>{t("commission.paymentOnline")}</h4>
                  <p>{t("commission.paymentOnlineSubtitle")}</p>
                </div>
              }
              value="online"
              checked={selectedOption === "online"}
              onChange={handleChangeRadio}
            />
            <Radio
              name="bank"
              label={
                <div>
                  <h4>{t("commission.paymentBank")}</h4>
                  <p>{t("commission.paymentBankSubtitle")}</p>
                </div>
              }
              value="bank"
              checked={selectedOption === "bank"}
              onChange={handleChangeRadio}
            />
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Commission;
