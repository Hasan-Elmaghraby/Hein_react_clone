import styles from "./styles.module.scss";

interface Props {
  title: string;
  subtitle?: string;
  right?: boolean;
}

export const SectionTitle: React.FC<Props> = ({ title, subtitle, right }) => {
  return (
    <div className={`${styles.sectionTitle} ${right && styles.right}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};
