import { Section } from "@/shared/components/Section";
import styles from "./styles.module.scss";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useTranslation } from "react-i18next";
import { InputFile } from "./components/InputFile";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Textarea } from "./components/Textarea";
import { Checkbox } from "./components/Checkbox";
import { Link } from "react-router-dom";
import { Button } from "@/shared/components/MainButton";
import { useAddAd } from "./hooks/useAddAd";

export interface MediaFile {
  url: string;
  type: "image" | "video";
  file?: File;
}
const AddAd = () => {
  const { t } = useTranslation();
  const {
    categories,
    subCategory,
    areasOptions,
    cityOptions,
    handleChange,
    handleSubmit,
    mediaFiles,
    setMediaFiles,
    title,
    price,
    category_id,
    subCategory_id,
    area_id,
    city_id,
    content,
    checkedCommission,
    checkedPhone,
    setCheckedCommission,
    isValid,
    setCheckedPhone,
    isEditAction,
  } = useAddAd();

  return (
    <Section>
      <SectionTitle
        right
        title={`${isEditAction ? t("editAds.title") : t("addAds.title")}`}
      />
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputFile mediaFiles={mediaFiles} setMediaFiles={setMediaFiles} />
        <div className={styles.inputsWrapper}>
          <Input
            value={title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder={t("addAds.addressName")}
            rest={{ maxLength: 20, minLength: 4 }}
            required
          />

          <Input
            value={price}
            onChange={handleChange}
            name="price"
            type="number"
            placeholder={t("addAds.price")}
            rest={{ maxLength: 20, minLength: 5 }}
            pattern="[0-5]*"
            required
          />
          <Select
            options={categories}
            name="category_id"
            value={category_id}
            onChange={handleChange}
            placeholder={t("addAds.mainCategory")}
          />

          <Select
            options={subCategory}
            name="subCategory_id"
            value={subCategory_id}
            onChange={handleChange}
            placeholder={t("addAds.subCategory")}
          />
          <Select
            options={areasOptions}
            name="area_id"
            value={area_id}
            onChange={handleChange}
            placeholder={t("addAds.area")}
          />
          <Select
            options={cityOptions}
            name="city_id"
            value={city_id}
            onChange={handleChange}
            placeholder={t("addAds.city")}
          />

          <Textarea
            name="content"
            value={content}
            onChange={handleChange}
            placeholder={t("addAds.adsDetails")}
          />

          <div className={styles.confirmWrapper}>
            <div className={styles.checkboxWrapper}>
              <Checkbox
                label={
                  <p
                    className={`${styles.checkboxLabel} ${
                      checkedPhone && styles.checked
                    }`}
                  >
                    {t("addAds.showPhone")}
                  </p>
                }
                checked={checkedPhone}
                onChange={(e) => setCheckedPhone(e.target.checked)}
                name="show_phone"
              />
              <Checkbox
                label={
                  <div className={styles.checkboxLabelWrapper}>
                    <p
                      className={`${styles.checkboxLabel} ${
                        checkedCommission && styles.checked
                      }`}
                    >
                      {t("addAds.confirmPayment")}
                    </p>
                    <Link to="/commission" className={styles.commissionLink}>
                      {t("addAds.commission")}
                    </Link>
                  </div>
                }
                checked={checkedCommission}
                onChange={(e) => setCheckedCommission(e.target.checked)}
                name="commission"
              />
            </div>
            <Button
              type="primary"
              text={`${isEditAction ? t("editAds.title") : t("addAds.submit")}`}
              disabled={!isValid}
            />
          </div>
        </div>
      </form>
    </Section>
  );
};

export default AddAd;
