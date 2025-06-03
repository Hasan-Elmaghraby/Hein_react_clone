import React from "react";
import styles from "./styles.module.scss";
import { Button } from "@/shared/components/MainButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TrashIcon } from "@/shared/icons/Trash";

interface Props {
  onDelete: () => void;
}

export const EditBtns: React.FC<Props> = ({ onDelete }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.buttons}>
      <Button type="editAds">
        <Link className={styles.editLink} to={"/editAd"}>
          {t("myAds.edit")}
        </Link>
      </Button>
      <Button
        type="danger"
        icon={<TrashIcon className="trash" />}
        onClick={onDelete}
      />
    </div>
  );
};
