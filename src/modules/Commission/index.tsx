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
import { ClipboardText } from "./components/ClipboardText";
import { Button } from "@/shared/components/MainButton";
import { Link } from "react-router-dom";
import { DollarIcon } from "@/shared/icons/Dollar";
import { ChevronLeftIcon } from "@/shared/icons/ChevronLeft";

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

  const handleSubmitCommission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedOption === "online") {
      console.log("wallet");
    }
    if (selectedOption === "bank") {
      console.log("bank");
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
          <form className={styles.form} onSubmit={handleSubmitCommission}>
            <h3 className={styles.optionTitle}>
              {t("commission.paymentOptions")}
            </h3>
            <Radio
              name="online"
              label={
                <div>
                  <h4 className={styles.radioTitle}>
                    {t("commission.paymentOnline")}
                  </h4>
                  <p className={styles.radioSubtitle}>
                    {t("commission.paymentOnlineSubtitle")}
                  </p>
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
                  <h4 className={styles.radioTitle}>
                    {t("commission.paymentBank")}
                  </h4>
                  <p className={styles.radioSubtitle}>
                    {t("commission.paymentBankSubtitle")}
                    <ClipboardText text={"0058905118900059"} />
                  </p>
                </div>
              }
              value="bank"
              checked={selectedOption === "bank"}
              onChange={handleChangeRadio}
            />
            <Button type="submit" text={t("commission.paymentCommission")} />
          </form>
        </div>

        <Link className={styles.commissionLink} to="/single-page/4">
          <div className={styles.linkStart}>
            <DollarIcon />
            <span>{t("commission.howToCalculateCommission")}</span>
          </div>
          <div className={styles.iconArrowWrap}>
            <ChevronLeftIcon />
          </div>
        </Link>
      </div>
    </Section>
  );
};

export default Commission;
