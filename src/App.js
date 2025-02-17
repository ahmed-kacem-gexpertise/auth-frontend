import React from "react";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import HomeLayout from "./components/layout/HomeLayout";
import AdminDashboardPage from "./pages/AdminDashboard";
import EmailConfirmationPage from "./pages/EmailConfirmationPage";
import { ToastContainer } from "react-toastify";
import ResetPassword from "./components/auth/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/confirm/:token" element={<EmailConfirmationPage />} />
            <Route path="/resetpassword/:token" element={<ResetPassword />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route element={<ProtectedRoute admin={true} />}>
            <Route path="/admindashboard" element={<HomeLayout />}>
              <Route index element={<AdminDashboardPage />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute admin={false} />}>
            <Route path="/dashboard" element={<HomeLayout />}>
              <Route index element={<AdminDashboardPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
