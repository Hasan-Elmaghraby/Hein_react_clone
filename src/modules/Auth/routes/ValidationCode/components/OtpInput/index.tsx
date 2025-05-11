import { useCallback, useRef, useState } from "react";
import styles from "./styles.module.scss";

interface OtpInputProps {
  length?: number;
  onComplete: (code: string) => void;
}

export const OtpInput: React.FC<OtpInputProps> = ({
  length = 4,
  onComplete,
}) => {
  const [values, setValues] = useState(Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newValues.every((v) => v.length === 1)) {
      onComplete(newValues.join(""));
    }
  };

  const handleRef = useCallback(
    (index: number) => (el: HTMLInputElement | null) => {
      inputsRef.current[index] = el;
    },
    [inputsRef]
  );

  return (
    <div className={styles.otpInputs}>
      {values.map((digit, index) => (
        <input
          className={` ${digit ? styles.filled : ""} `}
          key={index}
          ref={handleRef(index)}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
        />
      ))}
    </div>
  );
};
