import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import getRandomWord from './words'
import images from './images'

const onLetterClick = (e) => {
    e.target.className = 'inactive';
    let letter = e.target.innerText;

    letterExists(letter)
        ? addValidLetter(letter)
        : guessCount++;
    render();
};

const activateButtons = () => {
    let elements = [...document.getElementsByClassName('inactive')];
    elements.map(x => x.className = 'active');
}

const onReset = () => {
    activateButtons();
    setNewWord(word);
    validLetters = [];
    guessCount = 0;
    render();
}

const addValidLetter = (letter) => {
    word
        .split('')
        .map(x => {
            x === letter && validLetters.push(letter);
        })
}

const setNewWord = (prevWord) => {
    do {
        word = getRandomWord();
    } while (word === prevWord)
}

const letterExists = (letter) => {
    return word.includes(letter);
}

const FormatWord = () => {
    return word.split('').map((letter, i) => {
        return <p key={i}>
            {
                validLetters.includes(letter)
                    ? letter
                    : '_'
            }
        </p>;
    });
}

const onGameOver = (e) => {
    e.target.parentElement.className = 'hide';
    onReset();
}

const GameOver = () => {
    return (
        <div id="gameover" className={guessCount > 6 || validLetters.length === word.length ? 'show' : 'hide'}>
            <h1 id="gameover-title">{guessCount > 6 ? 'Du förlorade!' : 'Grattis du vann!'}</h1>
            <p id='play-again' onClick={onGameOver}>Spela igen</p>
        </div>
    )
}

let word = '';
let validLetters = [];
let guessCount = 0;

const App = () => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzåäö'.split('');
    !word && setNewWord(word);

    return (
        <div className="App">
            <h1>Hänga gubbe</h1>
            <p>Spelet går ut på att gissa ett ord</p>
            <img src={images[guessCount < 7 ? guessCount : 6]} alt='hangman' />

            <div id="lines">
                {<FormatWord />}
            </div>
            <p>Antal fel: {guessCount}</p>
            <div id="characters">
                {
                    alphabet.map((letter) => {
                        return (
                            <button
                                key={letter}
                                onClick={onLetterClick}
                                className='active'>
                                {letter}
                            </button>
                        )
                    })
                }
            </div>
            <button id="btn-reset" onClick={onReset}>Återställ</button>
            {
                <GameOver />
            }
        </div>
    );
}

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default render;