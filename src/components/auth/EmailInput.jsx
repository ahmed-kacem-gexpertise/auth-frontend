import React from 'react'

const EmailInput = ({...props}) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-sm font-bold">Email</label>
            <div className="relative flex items-center">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...props}
           
                placeholder="jhondoe@example.com"
              />
              <i className="fas fa-envelope absolute left-2 text-gray-400"></i>
            </div>
          </div>
    )
}

export default EmailInput
