import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './main.module.scss';

const Main: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      主页
      <button onClick={() => navigate('/memory')}> 卡片1 </button>
      <button onClick={() => navigate('/digit')}> 卡片2 </button>
    </div>
  );
};

export default Main;
