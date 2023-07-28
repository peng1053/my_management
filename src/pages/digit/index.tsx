import React, {FC, useState} from 'react';
import styles from './digit.module.scss';
import DigitMemory from './memory';
import DigitTest from './test';

interface IProps {}

const Digit: FC<IProps> = () => {
  const [acitve, setActive] = useState(0);

  return (
    <div className={styles.digit}>
      <div className={styles.btns}>
        <button
          onClick={() => setActive(0)}
          className={`${styles.btn} ${acitve === 0 ? styles.active : ''}`}
        >
          记忆
        </button>
        <button
          onClick={() => setActive(1)}
          className={`${styles.btn} ${acitve === 1 ? styles.active : ''}`}
        >
          测验
        </button>
      </div>
      <div className={styles.content}>
        {acitve === 0 && <DigitMemory />}
        {acitve === 1 && <DigitTest />}
      </div>
    </div>
  );
};

export default Digit;
