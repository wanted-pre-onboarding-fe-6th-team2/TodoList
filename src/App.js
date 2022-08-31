import { Global } from '@emotion/react';
import { ROUTES } from 'constants/route';
import Home from 'pages/Home/Home';
import Signin from 'pages/Signin/Signin';
import Signup from 'pages/Signup/Signup';
import Todos from 'pages/Todos/Todos';
import { Route, Routes } from 'react-router-dom';
import resetCss from 'styles/global';

const App = () => (
  <div>
    <Global styles={resetCss} />
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.TODOS} element={<Todos />} />
      <Route path={ROUTES.SIGNIN} element={<Signin />} />
      <Route path={ROUTES.SIGNUP} element={<Signup />} />
    </Routes>
  </div>
);

export default App;
