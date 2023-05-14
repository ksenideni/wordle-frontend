import React from 'react';
import letterStyles from './letter.module.css';


export default function Letter(props) {
    return (
        <span className={letterStyles[props.color]}>
                {props.char}
        </span>
    );
}