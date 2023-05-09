import React from 'react';
import Wordline from '../wordline/wordline';


export default class Wordboard extends React.Component {

    COLOR_GREEN = 'green';

    words = [
        { word: 'qwerty', colors: [this.COLOR_GREEN, 'grey', 'red', 'grey', 'yellow'] },
        { word: 'qwerty', colors: ['grey', 'red', 'red', 'grey', 'yellow'] },
        { word: 'qwerty', colors: ['yellow', 'green', 'red', 'grey', 'red'] },
    ]

    render() {
        console.log('Wordboard');
        var attempts = [];
        for (let i = 0; i < this.words.length; i++) {
            console.log(this.words.length)
            attempts.push(
                <Wordline
                    key={i}
                    wordColors={this.words[i].colors}
                    word={this.words[i].word}
                />
            )
        }
        return (
            // <Wordboard className='wordboard'>
            <div>
                {attempts}
            </div>
        );
    }
}