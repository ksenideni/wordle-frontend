export default class AttemptService {

    COLOR_GREEN = 'green';

    mockWords = [
        {word: 'qwerty', colors: [this.COLOR_GREEN, 'grey', 'red', 'grey', 'yellow']},
        {word: 'dfqpu', colors: ['grey', 'red', 'red', 'grey', 'yellow']},
        {word: 'xfgty', colors: ['yellow', 'green', 'red', 'grey', 'red']},
    ];

    mockAttempt = {word: 'atemp', colors: ['yellow', 'green', 'red', 'grey', 'red']};

    getAttempts(chatId, userId) {
        return this.mockWords;
    }

    postAttempt(chatId, userId, word) {
        console.log(word);
        return mockAttempt;

    }

}