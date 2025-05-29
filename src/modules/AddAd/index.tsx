// import React from 'react'
import { Section } from "@/shared/components/Section";
import styles from "./styles.module.scss";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useTranslation } from "react-i18next";
import { InputFile } from "./components/InputFile";

const AddAd = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <SectionTitle right title={t("addAds.title")} />
      <form className={styles.form}>
        <InputFile />
      </form>
    </Section>
  );
};

export default AddAd;
