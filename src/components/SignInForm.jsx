import React from 'react';
import SignInInputs from './SignInInputs';
import { Link } from 'react-router';

const SignInForm = () => {
 
  return (
    <div className="p-8 md:w-1/2 flex flex-col justify-center gap-5">
      <h2 className="text-2xl md:text-3xl font-bold text-red-600 ">Sign In</h2>
      <p className="text-gray-600 ">Hey enter your details to sign in to your account</p>
      <SignInInputs/>
      <p className="text-gray-600 text-center">
        Don't have an account?
        <Link className="text-red-600" to="/signup">
          Sign up Now
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;