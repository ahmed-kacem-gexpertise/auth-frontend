import React from 'react'

const SignUpInputs = () => {
    return (
        <form className="flex flex-col gap-4">
            <div >
              <label className="block text-gray-700 " htmlFor="username">
               
                Enter your username/email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                id="username"
                type="text"
              />
            </div>
            <div className="">
              <label className="block text-gray-700" htmlFor="password">
                <i className="fas fa-lock "></i>
                Enter your password
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                id="password"
                type="password"
              />
            </div>
            <div className="">
              <label className="block text-gray-700 " htmlFor="password">
               
                type again your password
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                id="password"
                type="password"
              />
            </div>
            
            <button
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
              type="submit"
            >
              SignUp
            </button>
          </form>                                             
    )
}

export default SignUpInputs
