import { Link } from "react-router-dom";

const EmailConfirmation = () => {
  return (
    <div className="font-sans   py-8 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white p-8 shadow-md">
          <div className="text-center tracking-wide border-b">
            
          </div>

          <div className="py-8 border-b">
            <p>
              Bonjour, <br /><br />Il semble que vous venez de vous inscrire à The App, c'est génial ! Pourriez-vous confirmer votre e-mail ? Cliquez simplement sur le bouton ci-dessous.
            </p>
            <Link to="/signin" className="text-white text-sm tracking-wide bg-red-600 hover:bg-red-700 rounded w-full block text-center my-8 p-4">
              CONFIRMER L'ADRESSE E-MAIL
            </Link>
           
          </div>

          <div className="mt-8 text-center text-gray-600">
            <h3 className="text-base sm:text-lg mb-4">Merci d'utiliser l' App !</h3>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default EmailConfirmation;
