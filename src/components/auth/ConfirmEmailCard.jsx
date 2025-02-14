import { Link } from "react-router-dom";
import { useSearchParams, useNavigate } from "react-router-dom";

const EmailConfirmationCard = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  
  return (
    <div className="flex   ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg">
        <div className="bg-red-600 flex justify-center items-center h-40">
          <i className="fas fa-check text-white text-6xl"></i>
          {/* <i className="fas fa-times text-white text-6xl"></i> */}
        </div>
        <div className="p-6 text-center flex flex-col gap-5">
          <h1 className="text-2xl font-bold ">Merci pour votre inscription</h1>
          <p className="text-gray-600">
          Merci pour avoir confirmé votre adresse e-mail ! Votre compte a été activé avec succès. Cliquez sur le bouton ci-dessous pour vous connecter et accéder à votre tableau de bord.
          </p>
          
          
           <Link to='/signin' className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full mb-4">connectez-vous</Link>
         
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmationCard;
