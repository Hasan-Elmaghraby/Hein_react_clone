import { Section } from "@/shared/components/Section";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { About } from "@/shared/model/home";
import styles from "./styles.module.scss";

export const AboutUs: React.FC<About> = ({
  title,
  subtitle,
  image,
  content,
}) => {
  return (
    <Section id="about" className={styles.aboutUs}>
      <SectionTitle title={title} subtitle={subtitle} />
      <figure className={styles.image}>
        <img src={image || "no image"} alt={title} />
      </figure>
      <p className={styles.description}>{content}</p>
    </Section>
  );
};
