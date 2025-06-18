import React, { useState } from "react";
import { SendMessageIcon } from "@/shared/icons/SendMessage";
import { ChatIcon } from "@/shared/icons/Chat";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import usePostComment from "@/modules/ProductDetails/api/usePostComment";
import { useParams } from "react-router-dom";

export const InputMessage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [comments, setComments] = useState<string>("");

  const { mutateAsync } = usePostComment(id as string);

  const handleInputComments = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComments(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comments.trim()) return;

    try {
      await mutateAsync({ comment: comments });
      setComments("");
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  return (
    <form className={styles.inputWrapper} onSubmit={handleSubmit}>
      <ChatIcon className={styles.chatIcon} />
      <input
        onChange={handleInputComments}
        type="text"
        name="comments"
        id="comments"
        value={comments}
        placeholder={t("productDetails.addCommentPlaceholder")}
        className={styles.input}
      />
      <button type="submit" className={styles.sendIcon}>
        <SendMessageIcon />
      </button>
    </form>
  );
};
