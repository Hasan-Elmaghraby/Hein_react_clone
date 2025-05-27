import React from "react";
import { Modal } from "@/shared/components/Modal";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { MyProfileInfo } from "./components/MyProfileInfo";
import { UserInfoModal } from "./components/UserInfoModal";
import { useGetUserRates } from "../../../../api/useGetUserRates";

interface Props {
  isOpen: boolean;
  handleCloseModal: () => void;
  userId: number;
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

export const UserRatesModal: React.FC<Props> = ({
  isOpen,
  handleCloseModal,
  userId,
}) => {
  const { t } = useTranslation();
  const { data } = useGetUserRates(userId);
  const { rates, user } = data || {};
  console.log(userId);
  console.log(data);

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <h3 className={styles.modalTitle}>
        {t("productDetails.announcerRates")}
      </h3>
      <MyProfileInfo
        rateNumber={user?.rate}
        userName={user?.name}
        userImage={user?.image}
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
