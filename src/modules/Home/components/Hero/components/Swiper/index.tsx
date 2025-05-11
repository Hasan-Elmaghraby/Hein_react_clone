import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/components/MainButton";
import { Slider } from "@/shared/model/home";
import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface HeroSwiperProps {
  sliders: Slider[];
}

export const HeroSwiper: React.FC<HeroSwiperProps> = ({ sliders }) => {
  const { t } = useTranslation();

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      spaceBetween={50}
      slidesPerView={1}
    >
      {sliders.map(({ id, title, content, image }) => (
        <SwiperSlide key={id}>
          <div className={styles.heroWrapper}>
            <div className={styles.content}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{content}</p>
              <Button type="hero" text={t("hero.button")} />
            </div>
            <div className={styles.image}>
              <figure>
                <img src={image} alt={title} />
              </figure>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
