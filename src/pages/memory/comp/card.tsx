import React, { CSSProperties, FC, useEffect, useState } from 'react';
import styles from '../memory.module.scss';

interface IProps {
  number: string; //编号
  encode: React.ReactNode; //编码
  picture: string; //图片
}

enum StatusEnum {
  num,
  code,
  img
}

const Card: FC<IProps> = ({ number, encode, picture }) => {
  const [curStatus, setCurStatus] = useState(StatusEnum.num);
  const [numStyle, setNumStyle] = useState<CSSProperties>();
  const [codeStyle, setCodeStyle] = useState<CSSProperties>();
  const [imgStyle, setImgStyle] = useState<CSSProperties>();

  useEffect(() => {
    if (StatusEnum.num === curStatus) {
      setNumStyle({ fontSize: '58px', height: '100%' });
      setCodeStyle({ height: '0%' });
      // setImgStyle({ height: '0%' });
    } else if (StatusEnum.code === curStatus) {
      setNumStyle({ fontSize: '20px', height: '20%' });
      setCodeStyle({ height: '90%' });
      // setImgStyle({ height: '0%' });
    } else if (StatusEnum.img === curStatus) {
      setNumStyle({ fontSize: '12px', height: '12%' });
      setCodeStyle({ height: '0%' });
      // setImgStyle({ height: '88%' });
    }
  }, [curStatus]);

  return (
    <div className={styles.card}>
      <div
        onClick={() => setCurStatus(StatusEnum.num === curStatus ? StatusEnum.code : StatusEnum.num)}
        className={styles.num}
        style={numStyle}
      >
        {number}
      </div>
      <div
        onClick={() => setCurStatus(StatusEnum.img)}
        className={styles.code}
        style={codeStyle}
      >
        {encode}
      </div>
      <div
        onClick={() => setCurStatus(StatusEnum.num)}
        className={styles.img}
        style={imgStyle}
      >
        <img src={picture} alt='' />
      </div>
    </div>
  );
};

export default Card;
