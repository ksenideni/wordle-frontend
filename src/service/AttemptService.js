import {COLOR_GREEN, COLOR_GREY, COLOR_YELLOW} from "../constants/constants";
import axios from "axios";

export default class AttemptService {
    host = process.env.WORDLE_BACKEND_HOST
    prefixURL = this.host + '/wordle/attempts'
    mockWords = [
        {word: 'qwert', colors: [COLOR_GREEN, COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_YELLOW]},
        {word: 'qasdf', colors: [COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_GREY, COLOR_GREEN]},
    ];

    mockAttempt = {word: 'atemp', colors: [COLOR_GREEN, COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_GREY]};

    async getAttempts(stateSetter) {
        const currentURLString = window.location.href;
        const currentURL = new URL(currentURLString);
        const chatId = currentURL.searchParams.get('chat_id')
        const userId = currentURL.searchParams.get('user_id')

        await axios.get(
            this.prefixURL,
            {
                params: {
                    chatId,
                    userId
                },
            })
            .then(function (response) {
                let resp = adapterResponse(response)
                console.log('resp')
                console.log(resp)
                stateSetter(resp)
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    postAttempt(word) {
        const currentURLString = window.location.href;
        const currentURL = new URL(currentURLString);
        const chatId = currentURL.searchParams.get('chat_id')
        const userId = currentURL.searchParams.get('user_id')
        this.mockAttempt = {...this.mockAttempt, word}
        this.mockWords.push(this.mockAttempt)
        return this.mockWords
    }
}

function adapterResponse(response) {
    let words = []
    let tries = response.data.tries
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
        colors.push('COLOR_' + colorLettersInWord[i].color)
    }
    return {word, colors}
}