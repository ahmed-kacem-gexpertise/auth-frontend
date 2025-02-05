import React from 'react'
import Header from '../components/Header'
import SignUpForm from '../components/SignUpFrom'

const SignUpPage = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full md:flex">
              <Header/>
              <SignUpForm/>
          </div>

        </div>
    )
}

export default SignUpPage
