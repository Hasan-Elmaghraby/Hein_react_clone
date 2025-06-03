import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./styles.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductSwiperProps {
  images: { id: number; image: string }[];
  title: string;
}

export const ProductSwiper: React.FC<ProductSwiperProps> = ({
  images,
  title,
}) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      // autoplay={{ delay: 3000 }}
      spaceBetween={20}
      slidesPerView={1}
      className="product-swiper"
    >
      {images.map(({ id, image }) => (
        <SwiperSlide key={id}>
          <div className={styles.productImages}>
            <figure className={styles.image}>
              <img src={image} alt={title} />
            </figure>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
