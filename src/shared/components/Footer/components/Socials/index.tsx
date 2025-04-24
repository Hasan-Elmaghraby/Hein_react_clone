import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { FacebookIcon } from "@/shared/icons/Facebook";
import { InstagramIcon } from "@/shared/icons/Instagram";
import { WhatsappIcon } from "@/shared/icons/Whatsapp";
import { SnapIcon } from "@/shared/icons/Snap";
export const Socials = () => {
  return (
    <ul className={styles.stylesocials}>
      <li>
        <Link to={""}>
          <SnapIcon />
        </Link>
      </li>
      <li>
        <Link to={""}>
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <li>
          <Link to={""}>
            <WhatsappIcon />
          </Link>
        </li>
        <Link to={""}>
          <InstagramIcon />
        </Link>
      </li>
    </ul>
  );
};
