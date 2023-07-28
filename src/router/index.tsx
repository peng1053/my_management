import React, {Suspense} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {routes} from './routes';

//鉴权
const Guard = ({element: Element, auth}: {element; path: string; auth?: boolean}) => {
  const hasToken = () => true;

  if (auth && !hasToken()) {
    return <Navigate to="/auth" replace />;
  }
  return <Element />;
};

const RouterView = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>加载中...</>}>
        <Routes>
          {routes.map(({path, element, auth, children = [], ...routes}) => (
            <Route
              key={path}
              path={path}
              element={<Guard auth={auth} path={path} element={element} />}
              {...routes}
            >
              {children.map(({path, element, auth, children, ...routes}) => (
                <Route
                  path={path}
                  element={<Guard auth={auth} path={path} element={element} />}
                  {...routes}
                  key={path}
                ></Route>
              ))}
            </Route>
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterView;
