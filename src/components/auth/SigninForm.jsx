import {useEffect} from "react";
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
import { toast } from "react-toastify";

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const { mutate: login, isLoading, error: loginError } = useAuthLogin();
  const { mutate: forgotPassword, isError: forgotPasswordError, isSuccess: forgotPasswordSuccess } = useForgotPassword();

  const onSubmit = (data) => {
    login(data);
  };

  const onClick = () => {
    const email = getValues("email");
    if (!email) {
      console.error("Email is required");
      return;
    }
    forgotPassword({ email });
  };
  useEffect(() => {
    if (forgotPasswordSuccess) {
      toast.success("Un email de réinitialisation du mot de passe a été envoyé");
    }
  }, [forgotPasswordSuccess]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg bg-white rounded shadow-md p-6 flex flex-col gap-4"
    >
      <EmailInput
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          },
        })}
        errors={errors}
      />
      {errors.email && (
        <span className="text-red-500 text-xs">{errors.email.message}</span>
      )}
      {forgotPasswordError && (
        <div className="text-red-500 text-xs">
          {forgotPasswordError?.message || "Une erreur s'est produite lors de la réinitialisation du mot de passe"}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label className="text-gray-700 text-sm font-bold">
            Mot de passe
          </label>
          <button
            onClick={onClick}
            type="button"
            className="text-sm text-blue-500 self-end"
            
          >
            Mot de passe oublié ?
          </button>
        </div>
        <PasswordInput
          {...register("password", { required: "Mot de passe requis" })}
          errors={errors}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
      </div>

      {loginError && (
        <div className="text-red-500 text-xs">
          {loginError?.message || "Une erreur s'est produite lors de la connexion"}
        </div>
      )}

      

      
      <CheckBox {...register("rememberMe")} />
      <ConnectButton />
      <OrConnectWithSplitter />
      <MicrosoftConnectButton />
      <SignupLink />
    </form>
  );
};

export default SigninForm;
