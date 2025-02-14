import React from 'react'
import { Link } from 'react-router';

const AgreeOnTermsOfService = ({...props}) => {
    return (
        <div className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-blue-500" {...props} />
            <span className="text-gray-700 text-sm">J'accepte les <Link to='/termsofservice' className="text-blue-600">Termes & Conditions </Link> en toute clarté</span>
        </div>
    )
}

export default AgreeOnTermsOfService
