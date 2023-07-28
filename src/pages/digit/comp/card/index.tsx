import React, {FC, useEffect, useMemo, useState} from 'react';
import styles from './card.module.scss';
import { IDigitInfo } from '@/types/digit';

export interface ICardStatus {
  number?: boolean;
  label?: boolean;
  des?: boolean;
  other?: boolean;
}

interface IProps {
  data: IDigitInfo;
  status?: ICardStatus;
}

const DigitCard: FC<IProps> = ({data, status}) => {
  const [numberShow, setNumberShow] = useState(status?.number || false);
  const [labelShow, setLabelShow] = useState(status?.label || false);
  const [desShow, setDesShow] = useState(status?.des || false);
  const [otherShow, setOtherShow] = useState(status?.other || false);

  useEffect(() => {
    setNumberShow(status?.number || false);
    setLabelShow(status?.label || false);
    setDesShow(status?.des || false);
    setOtherShow(status?.other || false);
  }, [data]);

  const codeLabel = useMemo(() => {
    if (1 === data.codeType) {
      return {
        text: '形', //形状
        color: 'rgba(244,205,50,1)',
      };
    } else if (2 === data.codeType) {
      return {
        text: '音', //发音
        color: 'rgba(41,225,146,1)',
      };
    } else if (3 === data.codeType) {
      return {
        text: '逻', //逻辑
        color: 'rgba(249,74,80,1)',
      };
    }
    return {};
  }, [data]);

  return (
    <div className={styles.digitCard}>
      <div className={styles.header}>
        <div
          onClick={() => setNumberShow(true)}
          className={`${styles.box} ${styles.numberWrapper}`}
        >
          {numberShow ? (
            <span className={styles.number}>{data.number}</span>
          ) : (
            <span className={styles.side}>数字</span>
          )}
        </div>
        <div onClick={() => setLabelShow(true)} className={`${styles.box} ${styles.codeWrapper}`}>
          {labelShow ? (
            <>
              <span className={styles.code}>{data.code}</span>
              <span className={styles.label} style={{backgroundColor: codeLabel.color}}>
                {codeLabel.text}
              </span>
            </>
          ) : (
            <span className={styles.side}>编码</span>
          )}
        </div>
      </div>
      <div className={styles.center}>
        <div onClick={() => setDesShow(true)} className={`${styles.box} ${styles.imgWrapper}`}>
          {desShow ? (
            <div className={styles.img}>
              <img src={require(`@/assets/cards/${data.number}.jpeg`)} alt="" />
              <div className={styles.des}>
                <p className={styles.desTitle}>{data.evolve}</p>
                <p className={styles.desLabel}>{data.note}</p>
              </div>
            </div>
          ) : (
            <span className={styles.side}>备注和图片</span>
          )}
        </div>
        <div onClick={() => setOtherShow(true)} className={styles.box} style={{height: '22px'}}>
          {otherShow ? <span>{data.other || '无'}</span> : <span>其它编码</span>}
        </div>
      </div>
    </div>
  );
};

export default DigitCard;
