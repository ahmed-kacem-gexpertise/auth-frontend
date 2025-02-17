import GexpertiseLogo from "./GexpertiseLogo";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center gap-6">
      <GexpertiseLogo action="Changer votre mot de passe" />
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
