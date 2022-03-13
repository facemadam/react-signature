import { React, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AuthUser from './service/AuthUser';
import Navi from './layout/Navi';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPass from './pages/ForgotPass';
import NotFound from './pages/NotFound';

function App() {
  const [hasToken, setHasToken] = useState(false);
  useEffect(() => {
    const token = AuthUser.getUserAuthToken();
    if (token) {
      setHasToken(true);
    }
  }, []);

  return (
    <BrowserRouter>
      {hasToken ? <Navi /> : null}
      <Routes>
        <Route
          path="/"
          element={hasToken ? <Home /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signin"
          element={hasToken ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={hasToken ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/forgotpass"
          element={hasToken ? <Navigate to="/" /> : <ForgotPass />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
