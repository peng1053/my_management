import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './auth.module.scss';

const Auth: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.auth}>
      欢迎来到管理系统！
      <button onClick={() => navigate('/', { replace: true })}> 登录 </button>
    </div>
  );
};

export default Auth;
