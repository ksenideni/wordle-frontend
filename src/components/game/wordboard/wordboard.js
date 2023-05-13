import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Wordline from '../wordline/wordline';

export default function Wordboard() {

    let words = useSelector(state => state.wordleGame.words)

    const attempts = [];
    for (let i = 0; i < words.length; i++) {
        attempts.push(
            <Wordline
                key={i}
                wordColors={words[i].colors}
                word={words[i].word}
            />
        )
    }
    return (
        <div>
            {attempts}
        </div>
    );
}