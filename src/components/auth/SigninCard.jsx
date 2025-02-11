import React from 'react'
import  GexpertiseLogoSignin from './GexpertiseLogoSignin'
import SigninForm from './SigninForm'
const SigninCard = () => {
    return (
        <main className="flex-grow flex flex-col items-center justify-center gap-6">
            <GexpertiseLogoSignin/>
            <SigninForm/>
        </main>

    )
}

export default SigninCard
