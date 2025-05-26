import styles from "./styles.module.scss";
import { TrashIcon } from "@/shared/icons/Trash";
import { useTranslation } from "react-i18next";
import { Modal } from "@/shared/components/Modal";
import { useEffect, useState } from "react";
import { Button } from "@/shared/components/MainButton";
import { useDeleteProfile } from "../../api/useDeleteProfile";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/shared/context/UserContext";
import Cookies from "js-cookie";

export const DeleteAccount = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { setUser } = useUser();

  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync, data, isSuccess, isError, error } = useDeleteProfile();

  const handleDeleteAccount = () => {
    mutateAsync();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      Cookies.remove("access_token");
      setIsOpen(false);
      setUser(null);
      navigate("/");
    }

    if (isError) {
      toast.error(error.message);
    }
  }, [isSuccess, isError]);

  return (
    <>
      <div className={styles.deleteAccount} onClick={() => setIsOpen(true)}>
        <div className={styles.trashIconWrapper}>
          <TrashIcon />
          <p className={styles.text}>{t("account.deleteAccount")}</p>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.deleteModalIcon}>
          <TrashIcon />
        </div>

        <h2 className={styles.modalTitle}> {t("account.deleteAccount")}</h2>
        <p className={styles.modalText}>{t("account.deleteMessage")}</p>
        <Button
          type="danger"
          text={t("account.confirmDelete")}
          onClick={handleDeleteAccount}
        />
      </Modal>
    </>
  );
};
