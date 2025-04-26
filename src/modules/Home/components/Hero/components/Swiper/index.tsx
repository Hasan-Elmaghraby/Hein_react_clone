import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { MainButton } from "@/shared/components/MainButton";
import styles from "./styles.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const HeroSwiper = () => {
  const { t } = useTranslation();

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      // autoplay={{ delay: 3000 }}
      spaceBetween={50}
      slidesPerView={1}
      dir={"rtl"}
    >
      <SwiperSlide>
        <div className={styles.heroWrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t("hero.title")}</h1>
            <p className={styles.description}>{t("hero.description")}</p>
            <MainButton hero text={t("hero.button")} />
          </div>
          <div className={styles.image}>
            <figure>
              <img src="../../../../public/images/hero/hero1.png" alt="" />
            </figure>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.heroWrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t("hero.title")}</h1>
            <p className={styles.description}>{t("hero.description")}</p>
            <MainButton hero text={t("hero.button")} />
          </div>
          <div className={styles.image}>
            <figure>
              <img src="../../../../public/images/hero/hero1.png" alt="" />
            </figure>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.heroWrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t("hero.title")}</h1>
            <p className={styles.description}>{t("hero.description")}</p>
            <MainButton hero text={t("hero.button")} />
          </div>
          <div className={styles.image}>
            <figure>
              <img src="../../../../public/images/hero/hero1.png" alt="" />
            </figure>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
