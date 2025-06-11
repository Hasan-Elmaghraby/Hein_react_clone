import { useGetSinglePage } from "./apis/useGetSinglePage";
import { Section } from "@/shared/components/Section";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { useParams } from "react-router-dom";
import Loader from "@/shared/components/Loader";
import { Image } from "@/shared/components/Image";
const SinglePage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSinglePage(id as unknown as number);

  if (isLoading) return <Loader />;
  return (
    <Section>
      <SectionTitle title={data?.title} />
      <Image src={data?.image} alt={data?.title} maxWidth="200px" center />
      <>{data?.content}</>
    </Section>
  );
};

export default SinglePage;
