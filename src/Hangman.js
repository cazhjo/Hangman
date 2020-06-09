import React, { useState, useEffect, useCallback } from 'react';
import Image from './components/Image';
import Button from './components/Button';
import Letter from './components/Letter'
import getRandomWord from './utils/words'
import Gameover from './components/Gameover'
import './styling/hangman.css';

let word = getRandomWord();
const alphabet = 'abcdefghijklmnopqrstuvwxyzåäö'.split('');

const Hangman = () => {
    let [state, setState] = useState({
        usedLetters: new Set(),
        guessCount: 0,
        validLetters: [],
        hasWon: false
    });

    useEffect(() => {
        checkWin()
    }, [state.validLetters])

    const usedLettersIncludes = (letter) => [...state.usedLetters].includes(letter)

    const onLetterClick = (e) => {
        let letter = e.target.innerText;

        setState(() => {
            let temp = [...state.validLetters]
            word.split('').map(x => x === letter && temp.push(letter));

            return {
                usedLetters: new Set([...state.usedLetters, letter]),
                guessCount: word.includes(letter) ? state.guessCount : state.guessCount + 1,
                validLetters: temp
            }
        })
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
                show={usedLettersIncludes(letter) || (!state.hasWon && state.guessCount === 7)}
                checkWin={checkWin}
            />
        ))
    )


    const checkWin = () => {
        let hasWon = state.validLetters.length === word.length;

        hasWon && setState({
            usedLetters: state.usedLetters,
            guessCount: state.guessCount,
            validLetters: state.validLetters,
            hasWon
        })
    }


    const onReset = () => {
        setState({ usedLetters: new Set(), guessCount: 0, validLetters: [], hasWon: false });
        word = getRandomWord();
    };

    return (
        <div>
            <h1>Hänga gubbe</h1>
            <p>Spelet går ut på att gissa ett ord</p>
            <Image index={state.guessCount === 7 ? 6 : state.guessCount} />
            <div id='lines'>{generateLetters()}</div>
            <p>Antal gissningar kvar: {7 - state.guessCount}</p>
            <div id='characters'>{buttonsFromAlphabet()}</div>
            <Button onClick={onReset} text='Återställ' />
            <Gameover guessCount={state.guessCount} reset={onReset} hasWon={state.hasWon} word={word} />
        </div>
    )
};

export default Hangman;