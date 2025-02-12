import React from 'react'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import CheckBox from './CheckBox'
import ConnectButton from './ConnectButton'
import OrConnectWithSplitter from './OrConnectWithSplitter'
import MicrosoftConnectButton from './MicrosoftConnectButton'
import SignupLink from './SignupLink'

import {useForm} from 'react-hook-form'
import useAuthLogin from '../../hooks/useAuthLogin';




const SigninForm = () => {
    const {
        register, 
        handleSubmit, 
        formState: { errors }, 
    } = useForm()
    const { mutate: login, isLoading, error } = useAuthLogin();

    const onSubmit = (data) => {
        console.log(data)
        login(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white rounded shadow-md p-6 flex flex-col gap-4">
        <EmailInput 
          register={register}
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
    
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <label className="text-gray-700 text-sm font-bold">Mot de passe</label>
                <a href="#" className="text-sm text-blue-500 self-end">Mot de passe oublié ?</a>
            </div>
            <PasswordInput 
                {...register("password", { 
                        required: " password is required", 
                       
                    })}
            />
            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
        </div>
    
        <CheckBox />
        <ConnectButton /> 
        <OrConnectWithSplitter />
        <MicrosoftConnectButton />
        <SignupLink />
    </form>
    )
}

export default SigninForm
