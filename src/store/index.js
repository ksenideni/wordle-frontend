import {configureStore} from '@reduxjs/toolkit'
import {wordleReducer} from "../reducers/wordleSlice";

export default configureStore({
    reducer: {
        wordleGame: wordleReducer,
    }
})