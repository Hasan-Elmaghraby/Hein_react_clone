import React from "react";
import { Container } from "@/shared/components/Container";
import { Section } from "@/shared/components/Section";
import styles from "./styles.module.scss";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { ProductCard } from "@/shared/components/ProductCard";
import { Latest } from "@/shared/model/home";

interface Props {
  latest: Latest[];
}

export const LatestAds: React.FC<Props> = ({ latest }) => {
  return (
    <Section className={styles.latestAds}>
      <Container>
        <SectionTitle
          title={"احدث الاعلانات"}
          subtitle={"تصفح احدث الاعلانات"}
        />
        <div className={styles.cards}>
          {latest.map((ad) => (
            <ProductCard
              key={ad.id}
              mainImage={ad.image}
              userImage={ad.user.image}
              title={ad.title}
              userName={ad.user.name}
              price={ad.price}
              time={ad.time_ago}
              area={ad.area?.name}
              categoryName={ad.category.name}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
