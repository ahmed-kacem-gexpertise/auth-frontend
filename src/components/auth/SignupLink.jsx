import React from 'react'
import { Link } from 'react-router';

const SignupLink = () => {
    return (
        <div className="text-center">
            <p className="text-sm text-gray-700">
              Vous n'avez pas de compte ? <Link to='/signup' className="text-blue-500">S'inscrire</Link>
            </p>
          </div>
    )
}

export default SignupLink
