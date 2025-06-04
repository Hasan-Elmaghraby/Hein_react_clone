import { useEffect, useState } from "react";
import { useGetCategories } from "../api/useGetCategories";
import { useGetAreas } from "../api/useGetAreas";
import { usePostAd } from "../api/usePostAd";
import { usePutAd } from "../api/usePutAd";
import { useGetMyAds } from "../api/useGetMyAds";
import { Areas } from "@/shared/model/Areas";
import { toast } from "react-toastify";
import { useLocation, useParams } from "react-router-dom";
import { Item } from "@/shared/model/UserProfile";
import { Category, SelectOption, MediaFile, FormState } from "../types/types";

export const useAddAd = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const action = params.get("action");
  const isEditAction = action?.startsWith("edit/");

  const { id } = useParams();
  const { data: myAds } = useGetMyAds(Number(id));

  const [myAdEditData, setMyAdEditData] = useState<Item | null>(null);

  const { data } = useGetCategories();
  const { data: areas } = useGetAreas();
  const { mutateAsync, data: dataPosted } = usePostAd();
  const { mutateAsync: mutateAsyncEdit, data: dataEdit } = usePutAd(Number(id));

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
    if (myAds) {
      myAds.map((myAdEdit: Item) => setMyAdEditData(myAdEdit));
    }
  });

  useEffect(() => {
    if (isEditAction) {
      console.log(myAdEditData);
      setForm({
        title: myAdEditData?.title || "",
        price: myAdEditData?.price || "",
        category_id: myAdEditData?.category?.id || "",
        area_id: myAdEditData?.area?.area_id || "",
        content: "",
        subCategory_id: "",
        city_id: "",
      });
    }
  }, [isEditAction, myAdEditData]);

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
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | HTMLFormElement
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

    if (action === "add") {
      try {
        mutateAsync({
          title: form.title,
          price: form.price,
          category_id: form.category_id,
          area_id: form.area_id,
          content: form.content,
          images: mediaFiles,
          show_phone: Number(checkedPhone),
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
    }

    if (isEditAction) {
      try {
        mutateAsyncEdit({
          title: form.title,
          price: form.price,
          category_id: form.category_id,
          area_id: form.area_id,
          content: form.content,
          images: mediaFiles,
          show_phone: Number(checkedPhone),
        });

        toast.success(dataEdit?.message);
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
    setForm,
    isEditAction,
  };
};
