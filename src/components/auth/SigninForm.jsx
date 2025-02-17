import React from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import CheckBox from "./CheckBox";
import ConnectButton from "./ConnectButton";
import OrConnectWithSplitter from "./OrConnectWithSplitter";
import MicrosoftConnectButton from "./MicrosoftConnectButton";
import SignupLink from "./SignupLink";

import { useForm } from "react-hook-form";
import useAuthLogin from "../../hooks/useAuthLogin";
import useForgotPassword from "../../hooks/useForgotPassword";

import { Link } from "react-router-dom";

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const { mutate: login, isLoading, error } = useAuthLogin();
  const { mutate: forgotPassword, isError, isSuccess } = useForgotPassword();
  const onSubmit = (data) => {
    login(data);
  };
  const onClick = () => {
    const email = getValues("email");
    if (!email) {
      console.error("Email is required");
      return;
    }
    forgotPassword({ email: email });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg bg-white rounded shadow-md p-6 flex flex-col gap-4"
    >
      <EmailInput register={register} />
      {errors.email && (
        <span className="text-red-500 text-xs">{errors.email.message}</span>
      )}

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label className="text-gray-700 text-sm font-bold">
            Mot de passe
          </label>
          <Link
            onClick={onClick}
            href="#"
            className="text-sm text-blue-500 self-end"
          >
            Mot de passe oublié ?
          </Link>
        </div>
        <PasswordInput
          {...register("password", {
            required: " password is required",
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
      </div>

      <CheckBox {...register("rememberMe")} />
      <ConnectButton />
      <OrConnectWithSplitter />
      <MicrosoftConnectButton />
      <SignupLink />
    </form>
  );
};

export default SigninForm;
