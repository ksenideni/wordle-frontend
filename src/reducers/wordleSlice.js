import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import AttemptService from "../service/AttemptService";
import {COLOR_GREEN, COLOR_GREY, COLOR_YELLOW} from "../constants/constants";

const attemptService = new AttemptService();

export const fetchWords = createAsyncThunk(
    'fetch',
    async () => {
        return AttemptService.getAttempts()
    }
)

export const wordleSlice = createSlice({

    name: "wordleReducer",
    initialState: {
        words: [],
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
            attemptService.getAttempts((attempts) => {
                state.words = attempts
            });
        },
        post: (state, action) => {
            if (action.payload.length === 5 && state.words.length < 5) {
                state.words = attemptService.postAttempt(action.payload);
            } else {
                console.log('you can\'t post, length=' + action.payload.length);
                return;
            }
            state.buffer = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWords.fulfilled, (state, action) => {
            state.words = adapterResponse(action.payload)
        })
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

function adapterResponse(response) {
    let words = []
    let tries = response.tries
    for (let i in tries) {
        words.push(adapterWord(tries[i].letters))
    }
    return words;
}

function adapterWord(colorLettersInWord) {
    let word = ''
    let colors = []
    for (let i in colorLettersInWord) {
        word += colorLettersInWord[i].character
        colors.push(getColor(colorLettersInWord[i].color))
    }
    console.log({word, colors})
    return {word, colors}
}

function getColor(colorName) {
    console.log(colorName)
    switch (colorName) {
        case "GREY":
            return COLOR_GREY
        case "YELLOW":
            return COLOR_YELLOW
        case "GREEN":
            return COLOR_GREEN
    }
}