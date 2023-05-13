import {createSlice} from "@reduxjs/toolkit";
import AttemptService from "../service/AttemptService";

const attemptService = new AttemptService();

export const wordleSlice = createSlice({

    name: "wordleReducer",
    initialState: {
        chatId: 1,
        userId: 2,
        words: attemptService.getAttempts(1, 2)
    },
    reducers: {
        get: state => {
            state.words = attemptService.getAttempts(state.chatId, state.userId);
        },
        post: (state, action) => {
            state.words = state.words.push(attemptService.postAttempt(state.chatId, state.userId, action.payload));
        }
    }
});

// Action creators are generated for each case reducer function
export const {get, post} = wordleSlice.actions

export default wordleSlice.reducer