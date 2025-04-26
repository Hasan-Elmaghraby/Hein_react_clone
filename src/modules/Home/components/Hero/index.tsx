import { Container } from "@/shared/components/Container";
import styles from "./styles.module.scss";
import { HeroSwiper } from "./components/Swiper";

export const Hero = () => {
  return (
    <main className={styles.hero}>
      <Container>
        <HeroSwiper />
      </Container>
    </main>
  );
};
