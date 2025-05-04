import React from "react";
import { Section } from "@/shared/components/Section";
import { Container } from "@/shared/components/Container";
import { useParams } from "react-router-dom";
import { useGetProductDetails } from "./api/useGetProductDetails";
import { ProductSwiper } from "./components/ProductSwiper";
import styles from "./styles.module.scss";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const numericId = Number(id);

  const { data } = useGetProductDetails(numericId);
  const { item } = data || {};

  console.log(item);

  return (
    <Section>
      <Container>
        <div className={styles.productDetailsInfo}>
          <div className={styles.productSwiperWrapper}>
            <ProductSwiper
              images={item?.images || []}
              title={item?.title || ""}
            />
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productInfo}></div>
            <h1>{item?.title}</h1>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProductDetails;
