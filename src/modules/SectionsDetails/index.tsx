import useGetSectionDetails from "./api/useGetSectionDetails.ts/useGetSectionDetails";
import { useLocation, useParams } from "react-router-dom";
import { Section } from "@/shared/components/Section";
import { Container } from "@/shared/components/Container";
import styles from "./styles.module.scss";
import { useState } from "react";
import { SubCategory } from "@/shared/model/Categories";
import { Categories } from "@/shared/model/Categories";
import Loader from "@/shared/components/Loader";

const SectionsDetails = () => {
  const { id: id } = useParams();
  const numericId = Number(id);
  const { data, isLoading, isError } = useGetSectionDetails(numericId);

  const location = useLocation();
  const sectionName = location.state?.sectionName ?? "Unknown Section";

  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);

  const handleClickSubCategories = (targetItem: Categories) => {
    setSubCategories(targetItem?.sub_categories || []);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>Error</p>;
  }

  return (
    <Section>
      <Container>
        <h1>{sectionName}</h1>
        <div className={styles.sectionBtns}>
          {data?.map((item) => (
            <div
              role="button"
              key={item.id}
              className={styles.sectionBtn}
              onClick={() => handleClickSubCategories(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className={styles.subCategories}>
          {subCategories.map((targetItem) => (
            <div key={targetItem?.id}>{targetItem?.name}</div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default SectionsDetails;
