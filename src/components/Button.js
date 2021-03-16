import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ children, handleClick , icon, bgColor}) => {
  
  return (
    <button onClick={handleClick} className={`w-full px-6 py-2 mt-2 text-white ${bgColor} active:border-0`} >
      <span className="mr-2"><FontAwesomeIcon icon={icon}/></span> {children}
    </button>
  );
};

export default Button;
