import React from 'react';
import Header from './components/Header'
import SignInForm from './components/SignInForm'

const App = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full md:flex">
        <Header />
        <SignInForm />
      </div>
    </div>
  );
};

export default App;