import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Section } from "@/shared/components/Section";
import { SectionTitle } from "@/shared/components/SectionTitle";
import styles from "./styles.module.scss";
import { Image } from "@/shared/components/Image";
import commissionImage from "@public/images/pages/commission.png";
import { usePostCalculateCommission } from "./apis/usepostCalculateCommission";

import { useOnlinePayment } from "./apis/useOnlinePayment";
import { FormWrapper } from "./components/FormWrapper";
import { CommissionLink } from "./components/CommissionLink";
import { useTabTitle } from "@/shared/hooks/useTabTitle";

const Commission = () => {
  const { t } = useTranslation();

  useTabTitle("commission");

  const [isOpenModal, setIsOpenModal] = useState(false);

  const { mutateAsync, data, isPending } = usePostCalculateCommission();
  const { mutateAsync: mutateAsyncCommission, data: dataCommission } =
    useOnlinePayment();

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

  const handleSubmitCalculate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await mutateAsync(price);
      setTotal(data.value);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitCommission = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      if (selectedOption === "online") {
        await mutateAsyncCommission(total);
        window.location.href = dataCommission.link;
      }
      if (selectedOption === "bank") {
        setIsOpenModal(true);
        console.log("bank");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <SectionTitle right title={t("commission.name")} />
      <div className={styles.commissionWrapper}>
        <Image src={commissionImage} alt="commission" maxWidth="14.6rem" />
        <FormWrapper
          price={price}
          setPrice={setPrice}
          total={total}
          setTotal={setTotal}
          isPending={isPending}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          handleSubmitCalculate={handleSubmitCalculate}
          handleSubmitCommission={handleSubmitCommission}
          handleChange={handleChange}
          handleChangeRadio={handleChangeRadio}
          isOpenModal={isOpenModal}
          onCloseModal={() => setIsOpenModal(false)}
        />
        <CommissionLink />
      </div>
    </Section>
  );
};

export default Commission;
