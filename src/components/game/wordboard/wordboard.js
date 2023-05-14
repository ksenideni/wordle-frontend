import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Wordline from '../wordline/wordline';

export default function Wordboard() {

    const NUMBER_OF_ATTEMPTS = 5;

    let words = useSelector(state => state.wordleGame.words);
    let buffer = useSelector(state => state.wordleGame.buffer);

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

    let bufferColors = [];
    for (let i = 0; i < 5; i++) {
        bufferColors.push('grey');
    }
    attempts.push(
        <Wordline
            key={attempts.length}
            wordColors={bufferColors}
            word={buffer}
        />
    );

    for (let i = 0; i < NUMBER_OF_ATTEMPTS - words.length - 1; i++) {
        attempts.push(<Wordline
                key={attempts.length}
                wordColors={bufferColors}
                word={'-----'}
            />
        );
    }

    return (
        <div>
            {attempts}
        </div>
    );
}

function emptyAttempts(i) {

}