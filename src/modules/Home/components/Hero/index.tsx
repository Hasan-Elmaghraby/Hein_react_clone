import { Container } from "@/shared/components/Container";
import styles from "./styles.module.scss";
import { HeroSwiper } from "./components/Swiper";
import { Slider } from "@/shared/model/home";

interface HeroProps {
  sliders: Slider[];
}

export const Hero: React.FC<HeroProps> = ({ sliders }) => {
  return (
    <main className={styles.hero}>
      <Container>
        <HeroSwiper sliders={sliders} />
      </Container>
    </main>
  );
};
