import {COLOR_GREEN, COLOR_GREY, COLOR_YELLOW} from "../constants/constants";

export default class AttemptService {

    mockWords = [
        {word: 'qwert', colors: [COLOR_GREEN, COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_YELLOW]},
        {word: 'qasdf', colors: [COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_GREY, COLOR_GREEN]},
    ];

    mockAttempt = {word: 'atemp', colors: [COLOR_GREEN, COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_GREY]};

    getAttempts(chatId, userId) {
        return this.mockWords;
    }

    postAttempt(chatId, userId, word) {
        this.mockAttempt = {...this.mockAttempt, word}
        return this.mockAttempt;
    }

}