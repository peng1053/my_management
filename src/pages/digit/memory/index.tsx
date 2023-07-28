import React, {FC, useState} from 'react';
import styles from './memory.module.scss';
import DigitCard from '../comp/card';
import list from '../data.json';
import {IDigitInfo} from '@/types/digit';

interface IProps {}

const DigitMemory: FC<IProps> = () => {
  const numbList = new Array(110).fill(0);
  const [actIndex, setActIndex] = useState(0);
  const [actData, setActData] = useState<IDigitInfo>(list[actIndex]);

  const onClick = (index: number) => {
    setActIndex(index);
    setActData(list[index]);
  };

  return (
    <div className={styles.memory}>
      <div className={styles.numbLeft}>
        {numbList.map((_, index) => (
          <div className={styles.block} key={index}>
            <div
              onClick={() => onClick(index)}
              className={`${styles.numb} ${actIndex === index ? styles.active : ''}`}
            >
              {list[index].number}
            </div>
          </div>
        ))}
      </div>
      <div style={{width: '30px'}}></div>
      <div className={styles.numbright}>
        <DigitCard data={actData} status={{number: true}} />
      </div>
    </div>
  );
};

export default DigitMemory;
