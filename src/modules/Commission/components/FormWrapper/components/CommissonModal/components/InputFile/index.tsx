
import styles from "./styles.module.scss";
import { UploadFilesSecondIcon } from "@/shared/icons/UploadFilesSecond";
import { TrashIcon } from "@/shared/icons/Trash";
import { useTranslation } from "react-i18next";

interface MediaFile {
  url: string;
  type: "image";
  file?: File;
}

interface Props {
  mediaFiles: MediaFile[];
  setMediaFiles: React.Dispatch<React.SetStateAction<MediaFile[]>>;
}
export const InputFile: React.FC<Props> = ({ mediaFiles,setMediaFiles }) => {
  const { t } = useTranslation();
 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newMedia: MediaFile = {
        url: URL.createObjectURL(file),
        type: "image",
        file,
      };
      setMediaFiles([newMedia]);
    }
    event.target.value = "";
  };

  const handleRemove = () => {
    setMediaFiles((prev) => {
      if (prev[0]) URL.revokeObjectURL(prev[0].url);
      return [];
    });
  };

  const hasImage = mediaFiles.length === 1;
  const imageUrl = hasImage ? mediaFiles[0].url : null;

  return (
    <div className={styles.inputFileWrapper}>
      <div className={styles.customInputFileWrapper}>
        <label
          className={`${styles.customFileInput} ${hasImage && styles.full}`}
        >
          <input type="file" accept="image/*" onChange={handleFileChange} />

          {hasImage ? (
            <>
              <img
                src={imageUrl!}
                alt="Uploaded"
                className={styles.inputImagePreview}
              />
              <button
                type="button"
                className={styles.deleteButtonOverlay}
                onClick={handleRemove}
                aria-label="Delete image"
              >
                <TrashIcon />
              </button>
            </>
          ) : (
            <div className={styles.uploadIcon}>
              <UploadFilesSecondIcon />
            </div>
          )}
        </label>

        <div className={styles.descriptionWrapper}>
          <h4 className={styles.title}>
            {t("commission.commissionModalAttachment")}
          </h4>
          <p className={styles.description}>
            {t("commission.commissionModalMessage")}
          </p>
        </div>
      </div>
    </div>
  );
};
