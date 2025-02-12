import React from 'react'

const FirstNameLastnameInput = ({register}) => {
    return (
        <div className="flex flex-row justify-between w-full">

        <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-sm font-bold">Nom</label>
            <div className="relative flex items-center">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Doe"
                {...register('firstName', { required: 'first name is required' })}
              />
              
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-sm font-bold">Prénom</label>
            <div className="relative flex items-center">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="jhon"
                {...register('lastName', { required: 'Last name is required' })}
                

              />
              
            </div>
          </div>
        </div>
    )
}

export default FirstNameLastnameInput
