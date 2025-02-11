import React from 'react'
import  GexpertiseLogoSignin from './GexpertiseLogoSignin'
import SigninForm from './SigninForm'
const SigninCard = () => {
    return (
    
        <div className="flex-grow flex flex-col items-center justify-center gap-6">
            <GexpertiseLogoSignin/>
            <SigninForm/>
        </div>

    )
}

export default SigninCard
