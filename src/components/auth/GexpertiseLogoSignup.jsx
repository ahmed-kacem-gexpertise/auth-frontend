import React from 'react'
import Logo from '../../assets/Logo.svg'
const GexpertiseLogoSignin = () => {
    return (
        <div className="flex flex-col  items-center gap-6">

         <img src={Logo} alt="Logo" className="w-32 h-32" />
        <h1 className="text-2xl font-bold">Créer votre compte</h1>
        </div>
    )
}

export default GexpertiseLogoSignin
