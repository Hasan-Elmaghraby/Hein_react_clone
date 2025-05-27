import React from "react";
import { Section } from "@/shared/components/Section";
import { Container } from "@/shared/components/Container";
import { useParams } from "react-router-dom";
import { useGetProductDetails } from "./api/useGetProductDetails";
import { ProductSwiper } from "./components/ProductSwiper";
import styles from "./styles.module.scss";
import { ProductInfo } from "./components/ProductInfo";
import { Comments } from "./components/comments";
import { SimilarAds } from "./components/SimilarAds";
import Loader from "@/shared/components/Loader";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const numericId = Number(id);

  const { data, isLoading, isError } = useGetProductDetails(numericId);
  const { item, related } = data || {};

  const { comments } = item || {};

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>Error</p>;
  }

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
          <ProductInfo
            title={item?.title || ""}
            time_ago={item?.time_ago || ""}
            area={item?.area?.name || ""}
            price={item?.price || ""}
            content={item?.content || ""}
            userImage={item?.user.image || ""}
            userName={item?.user.name || ""}
            rateNumber={item?.user.myrate || ""}
            userMail={item?.user.email || ""}
            userPhone={item?.user.mobile || ""}
            userId={item?.user.id || 0}
          />
        </div>

        <Comments comments={comments || []} />

        <SimilarAds ads={related || []} />
      </Container>
    </Section>
  );
};

export default ProductDetails;
