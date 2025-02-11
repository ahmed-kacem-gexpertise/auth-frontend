import React from 'react'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import CheckBox from './CheckBox'
import ConnectButton from './ConnectButton'
import OrConnectWithSplitter from './OrConnectWithSplitter'
import MicrosoftConnectButton from './MicrosoftConnectButton'
import SignupLink from './SignupLink'






const SigninForm = () => {
    return (
        <form className="w-full max-w-lg bg-white rounded shadow-md p-6 flex flex-col gap-4">
            <EmailInput/>
            <div className="flex flex-col gap-2">
            
            <a href="#" className="text-sm text-blue-500 self-end">Mot de passe oublié ?</a>
            <PasswordInput/>
            </div>
            <CheckBox/>
            <ConnectButton/>
            <OrConnectWithSplitter/>
            <MicrosoftConnectButton/>
            <SignupLink/>

        </form>
    )
}

export default SigninForm
