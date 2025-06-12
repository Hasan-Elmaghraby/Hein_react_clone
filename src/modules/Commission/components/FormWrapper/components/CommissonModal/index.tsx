import React, { useState } from "react";
import { Modal } from "@/shared/components/Modal";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { InputFile } from "./components/InputFile";
import { Input } from "../Input";
import { Button } from "@/shared/components/MainButton";
import { useBankTransfer } from "@/modules/Commission/apis/useBankTransfer";
import { toast } from "react-toastify";

interface MediaFile {
  url: string;
  type: "image";
  file?: File;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export const CommissionModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { mutateAsync: transferCommission, data } = useBankTransfer();

  const [ipan, setIpan] = useState("");
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  const handleChangeIpan = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpan(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mediaFiles[0]?.file || !ipan) return;
    try {
      await transferCommission({
        commission: ipan,
        image: mediaFiles[0].file,
      });
      toast.success(data?.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className={styles.modalTitle}>
        {t("commission.commissionModalTitle")}
      </h3>
      <p className={styles.modalSubtitle}>
        {t("commission.commissionModalSubtitle")}
      </p>
      <form className={styles.formModal} onSubmit={handleSubmit}>
        <InputFile mediaFiles={mediaFiles} setMediaFiles={setMediaFiles} />
        <Input
          onChange={handleChangeIpan}
          type="number"
          value={ipan}
          placeholder={t("commission.commissionModalAttachmentPlaceholder")}
          name="ipan"
        />
        <Button type="submit" text={t("commission.commissionModalButton")} />
      </form>
    </Modal>
  );
};
