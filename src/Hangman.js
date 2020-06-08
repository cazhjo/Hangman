import React, { useState } from 'react';
import Image from './components/Image';
import Button from './components/Button';
import Letter from './components/Letter'
import getRandomWord from './utils/words'
import Gameover from './components/Gameover'
import './styling/hangman.css';

let word = getRandomWord();
const alphabet = 'abcdefghijklmnopqrstuvwxyzåäö'.split('');

const Hangman = () => {
    let [state, setState] = useState({ usedLetters: new Set(), guessCount: 0 });

    const usedLettersIncludes = (letter) => [...state.usedLetters].includes(letter)

    const onLetterClick = (e) => {
        let letter = e.target.innerText;

        setState({
            usedLetters: new Set([...state.usedLetters, letter]),
            guessCount: word.includes(letter) ? state.guessCount : state.guessCount + 1
        });
    }

    const buttonsFromAlphabet = () => (
        alphabet.map(letter => (
            <Button
                key={letter}
                onClick={onLetterClick}
                text={letter}
                isDisabled={usedLettersIncludes(letter)}
            />
        ))
    )

    const generateLetters = () => (
        word.split('').map((letter, i) => (
            <Letter
                key={i}
                text={letter}
                show={usedLettersIncludes(letter)}
            />
        ))
    )

    const onReset = () => {
        setState({ usedLetters: new Set(), guessCount: 0 });
        word = getRandomWord();
    };

    return (
        <div>
            <h1>Hänga gubbe</h1>
            <p>Spelet går ut på att gissa ett ord</p>
            <Image index={0} />
            <div id='lines'>{generateLetters()}</div>
            <p>Antal fel: {state.guessCount}</p>
            <div id='characters'>{buttonsFromAlphabet()}</div>
            <Button onClick={onReset} text='Återställ' />
            <Gameover guessCount={state.guessCount} reset={onReset} />
        </div>
    )
};

export default Hangman;