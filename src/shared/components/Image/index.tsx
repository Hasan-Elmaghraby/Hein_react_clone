import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.scss";

interface Props {
  src: string;
  alt: string;
  maxWidth?: string;
}
export const Image: React.FC<Props> = ({ src, alt, maxWidth = "100%" }) => {
  const [loaded, setLoaded] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <figure ref={ref} className={styles.lazyImageWrapper} style={{ maxWidth }}>
      {inView && (
        <img
          onLoad={() => setLoaded(true)}
          className={`${styles.image} ${loaded && styles.loaded}`}
          loading="lazy"
          src={src}
          alt={alt}
        />
      )}
    </figure>
  );
};
