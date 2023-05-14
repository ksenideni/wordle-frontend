import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToBuffer} from "../../../reducers/wordleSlice";

export default function Key(props) {

    let buffer = useSelector(state => state.wordleGame.buffer);
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(addToBuffer(props.char))}>
            {props.char}
        </button>
    );

}