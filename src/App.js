import React from 'react';
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import PageNotFound from './components/PageNotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';
import HomeLayout from './components/layout/HomeLayout';
import AdminDashboard from './pages/AdminDashboard'
const App = () => {
  return (
<BrowserRouter>
      <Routes>
          <Route path="/"  element={<Layout />}>

            <Route index element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/home"  element={<HomeLayout />}>

            <Route index element={<AdminDashboard />} />

          </Route>
                      
          
      </Routes>
    </BrowserRouter>
  );
};

export default App;