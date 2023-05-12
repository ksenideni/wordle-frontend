import {createSlice} from "@reduxjs/toolkit";
import AttemptService from "../service/AttemptService";

export const wordleSlice = createSlice({
    attemptService: new AttemptService(),
    name: "wordlePlay",
    initialState: {
        chatId: null,
        userId: null,
        words: null
    },
    reducers: {
        get: state => {
            state.words = attemptService.getAttempts(state.chatId, state.userId);
        },
        post: state => {
            state.words = state.words.push(attemptService.postAttempt());
        }
    }
});

// Action creators are generated for each case reducer function
export const {get, post, incrementByAmount} = wordleSlice.actions

export default wordleSlice.reducer