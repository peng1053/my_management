import React, { FC, useEffect, useState } from 'react';
import Card from './comp/card';
import styles from './memory.module.scss';
import data from './data.json';

const Memory: FC = () => {
  const [singleNumAry, setSingleNumAry] = useState<string[]>();
  const [numAry, setNumAry] = useState<string[]>();
  const [letterObj, setLetterObj] = useState({});

  const getData = () => {
    setSingleNumAry(data.numDouAry);
    setNumAry(data.numAry);
    setLetterObj(data.letterObj);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.memory}>
      <div className={styles.wrapper}>
        {
          singleNumAry?.map((item, index) => (
            <Card number={`${index}`} encode={item} picture={require(`@/assets/cards/${index}.jpeg`)} key={`sin${index}`} />
          ))
        }
        <div className={styles.line}></div>
        {
          numAry?.map((item, index) => (
            <Card number={`${index < 10 ? ('0' + index) : index}`} encode={item} picture={require(`@/assets/cards/${index < 10 ? ('0' + index) : index}.jpeg`)} key={`num${index}`} />
          ))
        }
        <div className={styles.line}></div>
        {
          Object.keys(letterObj).map((k, i) => (
            <Card number={k} encode={letterObj[k]} picture={''} key={k} />
          ))
        }
      </div>
    </div>
  );
};

export default Memory;
