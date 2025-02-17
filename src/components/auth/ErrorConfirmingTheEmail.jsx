import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useResendEmail from "../../hooks/useResendEmail";
const EmailVerificationFailed = ({ data }) => {
  const { mutate: resend } = useResendEmail();
  const email = data.response.data.email;
  console.log(email);
  function onClick() {
    resend({ email: email });
  }
  return (
    <div className="flex items-center justify-center  ">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Sorry! We couldn't verify your email.
        </h1>
        <hr className="border-t-2 border-gray-300 mb-4" />
        <div className="mb-4">
          <FaTimesCircle className="mx-auto text-red-600" size={100} />
        </div>
        <p className="text-gray-700 mb-2">
          The confirmation link that was sent to your email has expired:
        </p>
        <p className="text-blue-600 mb-4">{email}</p>
        <p className="text-gray-700 mb-6">
          Please restart the registration process.
        </p>
        <Link
          onClick={onClick}
          className="bg-red-600  text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
        >
          resend confirmation link
        </Link>
      </div>
    </div>
  );
};

export default EmailVerificationFailed;
