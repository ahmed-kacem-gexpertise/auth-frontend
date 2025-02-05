import React from 'react';

const SignInForm = () => {
  return (
    <div className="p-8 md:w-1/2 flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">Sign In</h2>
      <p className="text-gray-600 mb-6">Hey enter your details to sign in to your account</p>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">
            <i className="fas fa-user mr-2"></i>
            Enter your username/email
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            id="username"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            <i className="fas fa-lock mr-2"></i>
            Enter your password
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            id="password"
            type="password"
          />
        </div>
        <div className="mb-4 text-right">
          <a className="text-gray-600" href="#">
            Having trouble in login?
          </a>
        </div>
        <button
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
          type="submit"
        >
          Login in
        </button>
      </form>
      <p className="text-gray-600 mt-4 text-center">
        Don't have an account?
        <a className="text-red-600" href="#">
          Sign up Now
        </a>
      </p>
    </div>
  );
};

export default SignInForm;