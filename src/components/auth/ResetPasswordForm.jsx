import React from "react";
import PasswordInput from "./PasswordInput";
import { useForm } from "react-hook-form";
import useResetPassword from "../../hooks/useResetPassword";
const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { mutate: resetPassword } = useResetPassword(); 
  const onSubmit = (data) => {
    resetPassword(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg bg-white rounded shadow-md p-6 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-sm font-bold">
          Nouveau Mot de passe
        </label>
        <PasswordInput
          {...register("new_password", {
            required: "Le mot de passe est requis",
           
          })}
        />
        {errors.newPassword && (
          <span className="text-red-500 text-sm">{errors.newPassword.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-sm font-bold">
          Confirmer le mot de passe
        </label>
        <PasswordInput
          {...register("confirm_password", {
            required: "Veuillez confirmer votre mot de passe",
            validate: (value) =>
              value === getValues("newPassword") || "Les mots de passe ne correspondent pas",
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
      >
        Réinitialiser le mot de passe
      </button>
    </form>
  );
};

export default ResetPasswordForm;
