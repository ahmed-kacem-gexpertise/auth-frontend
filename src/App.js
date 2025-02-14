import React from 'react';
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import PageNotFound from './components/PageNotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';
import HomeLayout from './components/layout/HomeLayout';
import AdminDashboardPage from './pages/AdminDashboard'
import ConfirmEmail from './components/auth/ConfirmEmail';
const App = () => {
  return (
<BrowserRouter>
      <Routes>
          <Route path="/"  element={<Layout />}>

            <Route index element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/confirm" element={<ConfirmEmail/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/dashboard"  element={<HomeLayout />}>

            <Route index element={<AdminDashboardPage />} />

          </Route>
                      
          
      </Routes>
    </BrowserRouter>
  );
};

export default App;