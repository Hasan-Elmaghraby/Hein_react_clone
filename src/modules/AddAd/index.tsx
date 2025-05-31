import { Section } from "@/shared/components/Section";
import styles from "./styles.module.scss";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useTranslation } from "react-i18next";
import { InputFile } from "./components/InputFile";
import { useEffect, useState } from "react";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Textarea } from "./components/Textarea";
import { Checkbox } from "./components/Checkbox";
import { Link } from "react-router-dom";
import { Button } from "@/shared/components/MainButton";
import { useGetCategories } from "./api/useGetCategories";
import { useGetAreas } from "./api/useGetAreas";
import { Areas } from "@/shared/model/Areas";
import { usePostAd } from "./api/usePostAd";

interface Category {
  id: number;
  name: string;
  sub_categories: SubCategory[];
}

interface SubCategory {
  id: number;
  name: string;
}

interface SelectOption {
  value: string;
  label: string;
}

interface FormState {
  title: string;
  price: string;
  category_id: string;
  subCategory_id: string;
  area_id: string;
  city_id: string;
  content: string;
}

const AddAd = () => {
  const { t } = useTranslation();
  const { data } = useGetCategories();
  const { data: areas } = useGetAreas();
  const { mutateAsync, data: dataPosted } = usePostAd();

  const [mainCategory, setMainCategory] = useState<Category[]>([]);
  const [categories, setCategories] = useState<SelectOption[]>([]);
  const [subCategory, setSubCategory] = useState<SelectOption[]>([]);

  const [areasData, setAreasData] = useState<Areas[]>([]);
  const [areasOptions, setAreasOptions] = useState<SelectOption[]>([]);
  const [cityOptions, setCityOptions] = useState<SelectOption[]>([]);

  const [isValid, setIsValid] = useState<boolean>(false);
  const [checkedPhone, setCheckedPhone] = useState<boolean>(false);
  const [checkedCommission, setCheckedCommission] = useState<boolean>(false);

  const [form, setForm] = useState<FormState>({
    title: "",
    price: "",
    category_id: "",
    subCategory_id: "",
    area_id: "",
    city_id: "",
    content: "",
  });

  const {
    title,
    price,
    category_id,
    area_id,
    content,
    subCategory_id,
    city_id,
  } = form;

  useEffect(() => {
    if (data) {
      const mainCategory: Category[] = data.map(
        ({ id, name, sub_categories }: Category) => ({
          id,
          name,
          sub_categories,
        })
      );
      setMainCategory(mainCategory);
    }
  }, [data]);

  useEffect(() => {
    const mainOptions = mainCategory.map(({ id, name }) => ({
      value: id.toString(),
      label: name,
    }));
    setCategories(mainOptions);
  }, [mainCategory]);

  useEffect(() => {
    if (category_id) {
      const selected = mainCategory.find(
        (category) => category.id === +category_id
      );

      const subOptions = (selected?.sub_categories || []).map(
        ({ id, name }) => ({
          value: id.toString(),
          label: name,
        })
      );

      setSubCategory(subOptions);
    } else {
      setSubCategory([]);
    }
  }, [mainCategory, category_id]);

  useEffect(() => {
    if (areas) {
      const areasData: Areas[] = areas.map(({ id, name, cities }: Areas) => ({
        id,
        name,
        cities,
      }));
      setAreasData(areasData);
    }
  }, [areas]);

  useEffect(() => {
    const areasOptions = areasData?.map(({ id, name }) => ({
      value: id.toString(),
      label: name,
    }));
    setAreasOptions(areasOptions);
  }, [areasData]);

  useEffect(() => {
    if (area_id) {
      const selected = areasData.find((area) => area.id === +area_id);
      const cityOptions = (selected?.cities || []).map(({ id, name }) => ({
        value: id.toString(),
        label: name.toString(),
      }));
      setCityOptions(cityOptions);
    } else {
      setCityOptions([]);
    }
  }, [areasData, area_id]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const validPrice = +price >= 0 && +price <= 5000;
    const validTitle = title.length >= 5 && title.length <= 20;
    setIsValid(validPrice && validTitle);
  }, [price, title]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      mutateAsync({
        title: form.title,
        price: form.price,
        category_id: form.category_id,
        area_id: form.area_id,
        content: form.content,
        images: [],
      });
      console.log(dataPosted);
    } catch {
      console.error("dslf");
    }
  };

  return (
    <Section>
      <SectionTitle right title={t("addAds.title")} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputFile />
        <div className={styles.inputsWrapper}>
          <Input
            value={title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder={t("addAds.addressName")}
            rest={{ maxLength: 20, minLength: 5 }}
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
                onChange={() => setCheckedPhone((prev) => !prev)}
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
                onChange={() => setCheckedCommission((prev) => !prev)}
              />
            </div>
            <Button
              type="primary"
              text={t("addAds.submit")}
              disabled={!isValid}
            />
          </div>
        </div>
      </form>
    </Section>
  );
};

export default AddAd;
