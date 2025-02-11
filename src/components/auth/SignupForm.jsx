import React from 'react'
import FirstNameLastnameInput from './FirstNameLastnameInput'
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import AgreeOnTermsOfService from './AgreeOnTermsOfService';
import SubscribeButton from './SubscribeButton';

const SignupForm = () => {
    return (
        <form className="w-full max-w-lg bg-white rounded shadow-md p-6 flex flex-col gap-4">
            <FirstNameLastnameInput/>
            <EmailInput/>
            <div className="flex flex-col gap-2">
            
            <label className="text-gray-700 text-sm font-bold">Mot de passe</label>
            
            
            <PasswordInput/>
            </div>
            <div className="flex flex-col gap-2">
            
            <label className="text-gray-700 text-sm font-bold">Confirmer le mot de passe</label>
            
            
            <PasswordInput/>
            </div>
            <AgreeOnTermsOfService/>
            <SubscribeButton/>

        </form>
    )
}

export default SignupForm
