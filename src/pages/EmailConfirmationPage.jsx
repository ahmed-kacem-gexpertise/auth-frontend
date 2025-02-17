import React, { useEffect } from "react";
import ConfirmEmailCard from "../components/auth/ConfirmEmailCard";
import EmailVerificationFailed from "../components/auth/ErrorConfirmingTheEmail";
import useConfirmEmail from "../hooks/useConfirmEmail";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EmailConfirmationPage = () => {
  const { error, isSuccess, isLoading, isError } = useConfirmEmail();
  console.log(error);
  useEffect(() => {
    if (isSuccess) {
      toast.success("Email confirmed successfully! 🎉");
     
    } else if (isError) {
      toast.error("Error confirming email.");
    }
  }, [isSuccess, isError]);

  return (
    <>
      {isLoading && <Spin size="large" />}
      {isError && <EmailVerificationFailed data={error} />}
      {isSuccess && <ConfirmEmailCard />}
    </>
  );
};

export default EmailConfirmationPage;
