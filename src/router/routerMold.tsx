import React, { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

//鉴权
const Guard = ({ element: Element, auth }: { element, path: string, auth?: boolean }) => {
  const hasToken = () => true;

  if (auth && !hasToken()) {
    return <Navigate to='/auth' replace />;
  }
  return <Element />;
}

//懒加载
const lazyLoad = (src: () => Promise<{ default: React.ComponentType<any>; }>) => (
  <Suspense fallback={<>加载中...</>}>
    {React.createElement(lazy(src))}
  </Suspense>
);

export { lazyLoad, Guard };