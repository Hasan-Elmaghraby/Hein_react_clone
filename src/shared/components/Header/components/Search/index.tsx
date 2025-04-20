import { SearchIcon } from "@/shared/icons/Search";
import styles from "./styles.module.scss";
export const Search = () => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input type="text" placeholder="قم بالبحث الان..." />
    </div>
  );
};
