import React from 'react'

const EmailInput = ({register}) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-sm font-bold">Email</label>
            <div className="relative flex items-center">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('email', { 
                required: 'Email is required', 
                pattern: { 
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                    message: 'Invalid email address' 
                } 
            })}
                placeholder="jhondoe@example.com"
              />
              <i className="fas fa-envelope absolute left-2 text-gray-400"></i>
            </div>
          </div>
    )
}

export default EmailInput
