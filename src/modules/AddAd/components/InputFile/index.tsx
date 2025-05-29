import { useState } from "react";
import styles from "./styles.module.scss";
import { UploadFilesSecondIcon } from "@/shared/icons/UploadFilesSecond";
import { TrashIcon } from "@/shared/icons/Trash";
import { useTranslation } from "react-i18next";

interface MediaFile {
  url: string;
  type: "image" | "video";
}
export const InputFile = () => {
  const { t } = useTranslation();
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const newMedia: MediaFile[] = [];

    const currentImages = mediaFiles.filter((file) => file.type === "image");
    const currentVideos = mediaFiles.filter((file) => file.type === "video");

    let imageCount = currentImages.length;
    let videoCount = currentVideos.length;

    for (const file of files) {
      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");

      if (isImage && imageCount < 4) {
        newMedia.push({
          url: URL.createObjectURL(file),
          type: "image",
        });
        imageCount++;
      }

      if (isVideo && videoCount < 1) {
        newMedia.push({
          url: URL.createObjectURL(file),
          type: "video",
        });
        videoCount++;
      }
    }

    setMediaFiles((prev) => [...prev, ...newMedia]);
  };

  const handleRemove = (index: number) => {
    setMediaFiles((prev) => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, i) => i !== index);
    });
  };

  const images = mediaFiles.filter((f) => f.type === "image");
  const videos = mediaFiles.filter((f) => f.type === "video");

  return (
    <div className={styles.inputFileWrapper}>
      <div className={styles.customInputFileWrapper}>
        <label
          className={`${styles.customFileInput} ${
            mediaFiles.length > 0 && mediaFiles.length < 5 && styles.full
          } ${mediaFiles.length >= 5 && styles.disabled}`}
        >
          <div className={styles.uploadIcon}>
            <UploadFilesSecondIcon />
          </div>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleFileChange}
            disabled={images.length >= 4 && videos.length >= 1}
          />
        </label>
        <div className={styles.descriptionWrapper}>
          <h4 className={styles.title}>{t("addAds.photosAndVideos")}</h4>
          <p className={styles.description}>{t("addAds.textVideo")}</p>
        </div>
      </div>
      <div className={styles.previewContainer}>
        {mediaFiles.map((file, index) => (
          <div key={index} className={styles.previewItem}>
            <button
              type="button"
              className={styles.deleteButton}
              onClick={() => handleRemove(index)}
              aria-label="Delete media"
            >
              <TrashIcon />
            </button>
            {file.type === "image" ? (
              <img src={file.url} alt={`preview-${index}`} />
            ) : (
              <video src={file.url} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
