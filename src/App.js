import React from 'react';
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import PageNotFound from './components/PageNotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
<BrowserRouter>
      <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<PageNotFound />} />

          
          
      </Routes>
    </BrowserRouter>
  );
};

export default App;