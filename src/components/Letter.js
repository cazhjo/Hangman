import React from 'react';

const Letter = ({show, text, checkWin}) => {
    return <p>{show ? text : '_'}</p>;
}

export default Letter;