import { Section } from "@/shared/components/Section";
import styles from "./styles.module.scss";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useTranslation } from "react-i18next";
import { InputFile } from "./components/InputFile";
import { useState } from "react";
import { Input } from "./components/Input";
import { Select } from "./components/Select";

const AddAd = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    title: "",
    price: "",
    category_id: "",
    area_id: "",
    content: "",
  });

  const { title, price, category_id, area_id, content } = form;
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Section>
      <SectionTitle right title={t("addAds.title")} />
      <form className={styles.form}>
        <InputFile />
        <div className={styles.inputsWrapper}>
          <Input
            value={title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder={t("addAds.addressName")}
            required
          />

          <Input
            value={price}
            onChange={handleChange}
            name="price"
            type="number"
            placeholder={t("addAds.price")}
            required
          />
          <Select
            options={[
              { value: "1", label: "اثاث" },
              { value: "s", label: "dsfds" },
              { value: "5", label: "dsfds" },
            ]}
            name="category_id"
            value={category_id}
            onChange={handleChange}
            placeholder={t("addAds.mainCategory")}
          />

          <Select
            options={[
              { value: "1", label: "اثاث" },
              { value: "s", label: "dsfds" },
              { value: "5", label: "dsfds" },
            ]}
            name="category_id"
            value={category_id}
            onChange={handleChange}
            placeholder={t("addAds.subCategory")}
          />
          <Select
            options={[
              { value: "1", label: "الرياض" },
              { value: "s", label: "dsfds" },
              { value: "5", label: "dsfds" },
            ]}
            name="area_id"
            value={area_id}
            onChange={handleChange}
            placeholder={t("addAds.area")}
          />
          <Select
            options={[
              { value: "1", label: "الدرعية" },
              { value: "s", label: "dsfds" },
              { value: "5", label: "dsfds" },
            ]}
            name="area_id"
            value={area_id}
            onChange={handleChange}
            placeholder={t("addAds.city")}
          />

          <textarea name="" id=""></textarea>
        </div>
      </form>
    </Section>
  );
};

export default AddAd;
