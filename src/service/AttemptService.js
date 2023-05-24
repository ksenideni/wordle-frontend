import {COLOR_GREEN, COLOR_GREY, COLOR_YELLOW} from "../constants/constants";
import axios from "axios";

export default class AttemptService {
    static host = process.env.WORDLE_BACKEND_HOST
    // static host = 'http://localhost:8080'

    static prefixURL = this.host + '/wordle/attempts'
    mockWords = [
        {word: 'qwert', colors: [COLOR_GREEN, COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_YELLOW]},
        {word: 'qasdf', colors: [COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_GREY, COLOR_GREEN]},
    ];

    mockAttempt = {word: 'atemp', colors: [COLOR_GREEN, COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_GREY]};

    static async getAttempts() {
        const currentURLString = window.location.href;
        const currentURL = new URL(currentURLString);
        const chatId = currentURL.searchParams.get('chat_id')
        const userId = currentURL.searchParams.get('user_id')

        const result =  await axios.get(
            this.prefixURL,
            {
                params: {
                    chatId,
                    userId
                },
            })
        return result.data
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
