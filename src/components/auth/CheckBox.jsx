import React from 'react'

const CheckBox = ({...props}) => {
    return (
        <div className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-blue-500" {...props} />
            <span className="text-gray-700 text-sm">Se souvenir de moi</span>
        </div>
    )
}

export default CheckBox
