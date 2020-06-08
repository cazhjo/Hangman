import React from 'react';

const Button = ({onClick, className, text, isDisabled}) => {
    return (
        <button
        onClick={onClick}
        disabled={isDisabled}>
        {text}
        </button>
    )
};

export default Button;