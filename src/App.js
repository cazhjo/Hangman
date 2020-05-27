import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import hang from './images/hang.jpg'
import getRandomWord from './words'

const onDeactivate = (e) => {
    e.target.className = 'inactive';
};

const activateButtons = () => {
    let elements = [...document.getElementsByClassName('inactive')];
    elements.map(x => x.className = 'active');
}

const onReset = () => {
    activateButtons();
    setNewWord(word);
    render();
}

const setNewWord = (prevWord) => {
    do {
        word = getRandomWord();
    } while (word === prevWord)
}

let word = '';

const App = () => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzåäö'.split('');
    !word && setNewWord(word);

    return (
        <div className="App">
            <h1>Hänga gubbe</h1>
            <p>Spelet går ut på att gissa ett ord</p>
            <img src={hang} />

            <div id="lines">
                {
                    word
                        .split('')
                        .map((letter, i) => {
                            return <p key={i}>_</p>
                        })
                }
            </div>
            <p>Antal fel: 0</p>
            <div id="characters">
                {
                    alphabet.map((letter) => {
                        return (
                            <button
                                key={letter}
                                onClick={onDeactivate}
                                className='active'>
                                {letter}
                            </button>
                        )
                    })
                }
            </div>
            <button id="btn-reset" onClick={onReset}>Återställ</button>
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