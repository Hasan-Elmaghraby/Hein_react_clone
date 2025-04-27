import styles from "./styles.module.scss";

interface Props {
  title: string;
  subtitle: string;
}

export const SectionTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};
