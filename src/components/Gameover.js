import React from 'react';

const Gameover = ({guessCount, reset, hasWon, word}) => (
    <div id="gameover" className={guessCount > 6 || hasWon  ? 'show' : 'hide'}>
        <h1 id="gameover-title">{guessCount > 6 ? 'Du förlorade!' : 'Grattis du vann!'}</h1>
        {!hasWon && <h2 id='right-word'>Rätta ordet var: {word}</h2>}
        <p id='play-again' onClick={reset}>Spela igen</p>
    </div>
)

export default Gameover;