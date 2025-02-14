import React from 'react'
import GexpertiseLogo from './GexpertiseLogo';
import ConfirmEmailCard from './ConfirmEmailCard'
const ConfirmEmail = () => {
    return (
        <div className="flex-grow flex flex-col items-center justify-center gap-6">
            <GexpertiseLogo action="Confirmation d'email"/>
            <ConfirmEmailCard/>
        </div>
    )
}

export default ConfirmEmail
