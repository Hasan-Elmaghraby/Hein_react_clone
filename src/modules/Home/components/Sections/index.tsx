import React from "react";
import { SectionCard } from "./components/SectionCard";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { Section } from "@/shared/components/Section";
import { CategoryElement } from "@/shared/model/home";
import styles from "./styles.module.scss";

interface CategoriesProps {
  sections: CategoryElement[];
}

export const Sections: React.FC<CategoriesProps> = ({ sections }) => {
  return (
    <Section className={styles.sections}>
      <SectionTitle
        title={"الأقسام"}
        subtitle={"تصفح أقسام هين المتنوعة والمختلفة"}
      />
      <div className={styles.cards}>
        {sections.map((section) => (
          <SectionCard
            key={section.id}
            name={section.name}
            id={section.id}
            content={section?.name || ""}
            image={section.image}
          />
        ))}
      </div>
    </Section>
  );
};
