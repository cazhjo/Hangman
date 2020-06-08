import React from 'react';

const Letter = ({show, text}) => (
    <p>{show ? text : '_'}</p>
)

export default Letter;