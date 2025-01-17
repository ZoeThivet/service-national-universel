import React from "react";

const hoveredStyle = "hover:bg-white hover:shadow-sm hover:!text-[#000091] hover:!border-[#000091]";
const disabledStyle = "bg-[#E5E5E5] text-[#929292] cursor-not-allowed !border-[#E5E5E5]";
const style = "bg-[#000091] border-[#000091] text-white";

const Button = ({ onClick, children = "Continuer", disabled = false }) => {
  return (
    <button disabled={disabled} className={`flex items-center justify-center px-3 py-2 border  ${disabled ? disabledStyle : style} ${!disabled && hoveredStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
