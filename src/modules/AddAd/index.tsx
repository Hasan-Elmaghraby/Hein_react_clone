import { Section } from "@/shared/components/Section";
import styles from "./styles.module.scss";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useTranslation } from "react-i18next";
import { InputFile } from "./components/InputFile";
import { useState } from "react";
import { Input } from "./components/Input";

const AddAd = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("");
  const [form, setForm] = useState({
    title: "",
    price: "",
  });

  const { title, price } = form;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          <Input
            value={title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder={t("addAds.addressName")}
            required
          />
          <Input
            value={title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder={t("addAds.addressName")}
            required
          />
          <Input
            value={title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder={t("addAds.addressName")}
            required
          />
          <div className={styles.inputWrapper}>
            <select
              className={styles.input}
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="" disabled hidden>
                {t("select.placeholder")}
              </option>
              <option value="option1">{t("select.option1")}</option>
              <option value="option2">{t("select.option2")}</option>
              <option value="option3">{t("select.option3")}</option>
            </select>
            <label
              className={`${styles.label} ${
                selected ? styles.labelFloating : ""
              }`}
            >
              {t("select.label")}
            </label>
          </div>
          <textarea name="" id=""></textarea>
        </div>
      </form>
    </Section>
  );
};

export default AddAd;
