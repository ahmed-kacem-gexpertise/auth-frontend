import { useState} from 'react'

const PasswordInput = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
    return (
        
    

            <div className="relative flex items-center">
            
              <input
                 type={isPasswordVisible ? "text" : "password"}
                className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue="********"
              />
              <i className="fas fa-lock absolute left-2 text-gray-400"></i>
              <i
              onClick={togglePasswordVisibility}
              className={`fas ${isPasswordVisible ? "fa-eye-slash" : "fa-eye"} absolute right-2 text-gray-400 cursor-pointer`}
            ></i>

            </div>
        
         
    )
}

export default PasswordInput
