import React from 'react';
import { useForm } from 'react-hook-form';


const Form = ({isSignupPage = false}) => {
  const { register, errors, handleSubmit } = useForm();

  return (
    <form className="w-full">
      <div hidden={!isSignupPage}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" placeholder="Enter your name"  className="form-input"/>
      </div>
      <div>
        <label htmlFor="email"></label>
        <input type="text" id="email" name="email" placeholder="Enter your email"  className="form-input"/>
      </div>
      <div>
        <label htmlFor="password"></label>
        <input type="password" id="password" name="password" placeholder="Enter your password" className="form-input"/>
      </div>
      <button type="submit" className="form-input bg-green-500 text-white font-semibold text-md">Login</button>
    </form>
  )
}

export default Form;
