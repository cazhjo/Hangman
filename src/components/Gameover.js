import React from 'react';

const Gameover = ({guessCount, reset}) => (
    <div id="gameover" className={guessCount > 6  ? 'show' : 'hide'}>
        <h1 id="gameover-title">{guessCount > 6 ? 'Du förlorade!' : 'Grattis du vann!'}</h1>
        <p id='play-again' onClick={reset}>Spela igen</p>
    </div>
)

export default Gameover;