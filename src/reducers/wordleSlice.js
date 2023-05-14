import {createSlice} from "@reduxjs/toolkit";
import AttemptService from "../service/AttemptService";

const attemptService = new AttemptService();

export const wordleSlice = createSlice({

    name: "wordleReducer",
    initialState: {
        chatId: 1,
        userId: 2,
        words: attemptService.getAttempts(1, 2),
        buffer: ''
    },
    reducers: {
        deleteFromBuffer: state => {
            state.buffer = state.buffer.slice(0, -1);
        },
        addToBuffer: (state, action) => {
            state.buffer += action.payload;
        },
        get: state => {
            state.words = attemptService.getAttempts(state.chatId, state.userId);

        },
        post: (state, action) => {
            if (action.payload.length === 5 && state.words.length < 5) {
                state.words.push(attemptService.postAttempt(state.chatId, state.userId, action.payload));
            } else {
                console.log('you can\'t post, length=' + action.payload.length);
                return;
            }
            state.buffer = '';
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    deleteFromBuffer,
    addToBuffer,
    get,
    post
} = wordleSlice.actions

export default wordleSlice.reducer