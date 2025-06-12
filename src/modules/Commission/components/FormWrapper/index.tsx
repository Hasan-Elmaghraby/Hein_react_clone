import React from "react";
import { Input } from "./components/Input";
import Loader from "@/shared/components/Loader";
import { Radio } from "./components/Radio";
import { ClipboardText } from "./components/ClipboardText";
import { Button } from "@/shared/components/MainButton";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { CommissionModal } from "./components/CommissonModal";

interface Props {
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  isPending: boolean;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitCalculate: (event: React.FormEvent<HTMLFormElement>) => void;
  handleSubmitCommission: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isOpenModal: boolean;
  onCloseModal: () => void;
}

export const FormWrapper: React.FC<Props> = ({
  price,
  total,
  isPending,
  selectedOption,
  handleSubmitCalculate,
  handleSubmitCommission,
  handleChange,
  handleChangeRadio,
  isOpenModal,
  onCloseModal,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.title}>{t("commission.title")}</h2>
      <p className={styles.subtitle}>{t("commission.subtitle")}</p>
      <form className={styles.form} onSubmit={handleSubmitCalculate}>
        <Input
          type="number"
          value={price}
          onChange={handleChange}
          name="price"
          placeholder={t("commission.placeholder")}
        />
        {price && (
          <div className={styles.showCalculation}>
            <span>{t("commission.calculateCommission")}</span>
            {isPending ? <Loader /> : <span>{total}</span>}
          </div>
        )}
      </form>
      <form className={styles.form} onSubmit={handleSubmitCommission}>
        <h3 className={styles.optionTitle}>{t("commission.paymentOptions")}</h3>
        <Radio
          name="online"
          label={
            <div>
              <h4 className={styles.radioTitle}>
                {t("commission.paymentOnline")}
              </h4>
              <p className={styles.radioSubtitle}>
                {t("commission.paymentOnlineSubtitle")}
              </p>
            </div>
          }
          value="online"
          checked={selectedOption === "online"}
          onChange={handleChangeRadio}
        />
        <Radio
          name="bank"
          label={
            <div>
              <h4 className={styles.radioTitle}>
                {t("commission.paymentBank")}
              </h4>
              <p className={styles.radioSubtitle}>
                {t("commission.paymentBankSubtitle")}
                <ClipboardText text={"0058905118900059"} />
              </p>
            </div>
          }
          value="bank"
          checked={selectedOption === "bank"}
          onChange={handleChangeRadio}
        />
        <Button type="submit" text={t("commission.paymentCommission")} />
      </form>
      <CommissionModal onClose={onCloseModal} isOpen={isOpenModal} />
    </div>
  );
};
