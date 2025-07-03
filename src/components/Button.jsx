import React from "react";

const Button = ({ Label = "", onClick, className, type }) => {
  return (
    <button
    type={type}
      onClick={onClick}
      className={`${className} border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 `}
    >
      {Label}
    </button>
  );
};

export default Button;
