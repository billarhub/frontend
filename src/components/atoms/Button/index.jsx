import React from 'react'

const Button = ({ children, noBackground, inverted, disabled, color,buttonAction,  ...props }) => {
    return (
      <button onClick={buttonAction} className={`c-button  ${noBackground ? 'c-button--no-background' : ''} ${disabled ? 'c-button--disabled' : ''} ${inverted ? 'c-button--inverted' : ''}`} 
      {...props}
      style={color && {color:color}}
      >
        {children}
      </button>
    );
  };
export default Button;
