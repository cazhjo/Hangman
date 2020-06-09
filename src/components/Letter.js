import React from 'react';

const Letter = ({show, text}) => {
    return <p>{show ? text : '_'}</p>;
}

export default Letter;