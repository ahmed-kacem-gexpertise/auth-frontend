import React from 'react'
import GexpertiseLogoSignup from './GexpertiseLogoSignup'
import SignupForm from './SignupForm';
const SignupCard = () => {
    return (
        <main className="flex-grow flex flex-col items-center justify-center gap-6">
            <GexpertiseLogoSignup/>
            <SignupForm/>

        </main>
    )
}

export default SignupCard
