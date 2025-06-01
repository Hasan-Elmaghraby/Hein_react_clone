import { useEffect, useState } from "react";
import { useGetCategories } from "../api/useGetCategories";
import { useGetAreas } from "../api/useGetAreas";
import { usePostAd } from "../api/usePostAd";
import { Areas } from "@/shared/model/Areas";
import { toast } from "react-toastify";

export interface MediaFile {
  url: string;
  type: "image" | "video";
  file?: File;
}
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

export const useAddAd = () => {
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

  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

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
        images: mediaFiles,
      });
      toast.success(dataPosted?.message);
      setForm({
        title: "",
        price: "",
        category_id: "",
        area_id: "",
        content: "",
        subCategory_id: "",
        city_id: "",
      });
    } catch {
      console.error("Failed to post comment:");
    }
  };

  return {
    categories,
    subCategory,
    areasOptions,
    cityOptions,
    handleSubmit,
    title,
    price,
    category_id,
    subCategory_id,
    area_id,
    city_id,
    content,
    handleChange,
    mediaFiles,
    setMediaFiles,
    isValid,
    checkedPhone,
    setCheckedPhone,
    checkedCommission,
    setCheckedCommission,
  };
};
