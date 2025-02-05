import React from 'react'
import SignUpInputs from './SignUpInputs';
import { Link } from 'react-router';

const SignUpFrom = () => {
    return (
        <div className="p-8 md:w-1/2 flex flex-col justify-center w-full h-full gap-5">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600">Sign Up</h2>
          <p className="text-gray-600 mb-6">Hey enter your details to register your account</p>
          <SignUpInputs/>
          <p className="text-gray-600  text-center ">
           Already have  an account?
            <Link className="text-red-600" to="/signin">
              Sign in Now
            </Link>
          </p>
        </div>
      );
}

export default SignUpFrom
