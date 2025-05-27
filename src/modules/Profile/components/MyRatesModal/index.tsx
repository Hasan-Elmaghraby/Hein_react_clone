import React from "react";
import { Modal } from "@/shared/components/Modal";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { MyProfileInfo } from "./components/MyProfileInfo";
import { UserInfoModal } from "./components/UserInfoModal";
import useGetMyRates from "../../api/useGetMyRates";

interface Props {
  isOpen: boolean;
  handleCloseModal: () => void;
  userName: string;
  useImage: string;
  rateNumber: string;
}

interface Rates {
  id: number;
  created_at: string;
  user: {
    name: string;
    image: string;
    myrate: string;
    test: string;
  };
}

export const MyRatesModal: React.FC<Props> = ({
  isOpen,
  handleCloseModal,
  userName,
  useImage,
  rateNumber,
}) => {
  const { t } = useTranslation();
  const { data } = useGetMyRates();
  const { rates } = data || {};

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <h3 className={styles.modalTitle}>{t("account.myRates")}</h3>
      <MyProfileInfo
        rateNumber={rateNumber}
        userName={userName}
        userImage={useImage}
      />
      <div className={styles.users}>
        {rates == 0 ? (
          <h3>Not found Rates</h3>
        ) : (
          rates?.map(({ id, created_at, user }: Rates) => (
            <UserInfoModal
              key={id}
              user={{
                userNameComment: user.name,
                userImageComment: user.image,
                userRateComment: user.myrate,
                timeComment: created_at,
              }}
              description={user.test}
            />
          ))
        )}
      </div>
    </Modal>
  );
};
