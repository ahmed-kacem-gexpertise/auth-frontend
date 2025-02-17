import React from "react";
import PasswordInput from "./PasswordInput";

const ResetPasswordForm = () => {
  return (
    <form className="w-full max-w-lg bg-white rounded shadow-md p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-sm font-bold">Mot de passe</label>
        <PasswordInput />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-sm font-bold">
          Confirmer le mot de passe
        </label>
        <PasswordInput />
      </div>
    </form>
  );
};

export default ResetPasswordForm;
