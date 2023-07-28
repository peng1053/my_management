import React, {FC, useState} from 'react';
import styles from './test.module.scss';

interface IProps {}

const DigitTest: FC<IProps> = () => {
  const [val, setVal] = useState('');
  const [numb, setNumb] = useState('');

  const randomNum = (n: number | string) => {
    const num = typeof n === 'string' ? Number(n) : n;
    let res = '';
    for (let i = 0; i < num; i++) {
      res += Math.floor(Math.random() * 10);
    }
    return res;
  };

  return (
    <div className={styles.test}>
      <div className={styles.inputWrapper}>
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={styles.input}
          placeholder="输入位数"
          type="number"
        />
        <button
          onClick={() => {
            setNumb(randomNum(val));
          }}
          className={styles.btn}
        >
          确定
        </button>
      </div>
      <p className={styles.number}>{numb}</p>
    </div>
  );
};

export default DigitTest;
