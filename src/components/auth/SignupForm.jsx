import React from "react";
import FirstNameLastnameInput from "./FirstNameLastnameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import AgreeOnTermsOfService from "./AgreeOnTermsOfService";
import SubscribeButton from "./SubscribeButton";
import { useForm } from "react-hook-form";
import useAuthRegister from "../../hooks/useAuthRegister";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const { mutate: signup, isLoading, error: signupError } = useAuthRegister();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Les mots de passe ne correspondent pas",
      });
      return;
    }

    const { confirmPassword, ...dataWithoutConfirm } = data;
    console.log(dataWithoutConfirm);
    signup(dataWithoutConfirm);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg bg-white rounded shadow-md p-6 flex flex-col gap-4"
    >
     <FirstNameLastnameInput register={register}  />
      <EmailInput {...register("email", {
        required: "L'email est requis",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Adresse email invalide",
        },
      })}  />

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-sm font-bold">Mot de passe</label>
        <PasswordInput
          {...register("password", { required: "Le mot de passe est requis" })}
          error={errors.password}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-sm font-bold">
          Confirmer le mot de passe
        </label>
        <PasswordInput
          {...register("confirmPassword", { required: "La confirmation du mot de passe est requise" })}
          error={errors.confirmPassword}
        />
      </div>

      <AgreeOnTermsOfService />

      {signupError && (
        <p className="text-red-500 text-sm">{signupError.message}</p>
      )}

      <SubscribeButton isLoading={isLoading} />
    </form>
  );
};

export default SignupForm;
