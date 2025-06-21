import { Section } from "@/shared/components/Section";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useGetFavorites } from "./apis/useGetFavorites";
import { Empty } from "@/shared/components/Empty";
import favoriteImage from "@public/images/favourite/noData.png";
import Loader from "@/shared/components/Loader";
import { useTranslation } from "react-i18next";
import { useTabTitle } from "@/shared/hooks/useTabTitle";
const Favorites = () => {
  const { t } = useTranslation();
  useTabTitle("favorite");

  const { data, isLoading } = useGetFavorites();

  if (isLoading) <Loader />;
  return (
    <Section>
      <SectionTitle right title={t("favourite.pageTitle")} />
      {data?.length === 0 && (
        <Empty src={favoriteImage} text={t("favourite.titleNoData")} />
      )}
    </Section>
  );
};

export default Favorites;
