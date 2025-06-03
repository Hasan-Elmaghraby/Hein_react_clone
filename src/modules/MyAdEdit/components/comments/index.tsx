import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

import { CardComment } from "./CardComment";
import { Comment } from "@/shared/model/SingleProduct";

interface Props {
  comments: Comment[];
}

export const Comments: React.FC<Props> = ({ comments }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.comments}>
      <h2 className={styles.title}>{t("productDetails.comments")}</h2>

      <div className={styles.cardsWrapper}>
        {comments.map((comment) => (
          <CardComment
            key={comment.id}
            userImage={comment.user.image}
            userName={comment.user.name}
            time={comment.created_at}
            comment={comment.comment}
          />
        ))}
      </div>
    </div>
  );
};
