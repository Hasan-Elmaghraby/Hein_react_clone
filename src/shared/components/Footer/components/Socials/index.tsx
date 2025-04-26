import styles from "./styles.module.scss";
import { FacebookIcon } from "@/shared/icons/Facebook";
import { InstagramIcon } from "@/shared/icons/Instagram";
import { WhatsappIcon } from "@/shared/icons/Whatsapp";
import { SnapIcon } from "@/shared/icons/Snap";
export const Socials = () => {
  return (
    <ul className={styles.socials}>
      <li className={styles.listItem}>
        <a
          href="https://www.snapchat.com/add/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SnapIcon />
        </a>
      </li>
      <li className={styles.listItem}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
      </li>
      <li className={styles.listItem}>
        <a
          href="https://wa.me/050454120"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsappIcon />
        </a>
      </li>
      <li className={styles.listItem}>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </li>
    </ul>
  );
};
