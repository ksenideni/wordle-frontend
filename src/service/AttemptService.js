import {COLOR_GREEN, COLOR_GREY, COLOR_YELLOW} from "../constants/constants";
import axios from "axios";
// import axios from "axios";

export default class AttemptService {
    // host = process.env.WORDLE_BACKEND_HOST
    prefixURL = 'http://localhost:8080/wordle/attempts'

    // mockAnswer = {
    //     "won": false,
    //     "tries": [
    //         {
    //             "letters": [
    //                 {
    //                     "character": "q",
    //                     "color": "GREY"
    //                 },
    //                 {
    //                     "character": "w",
    //                     "color": "GREY"
    //                 },
    //                 {
    //                     "character": "e",
    //                     "color": "YELLOW"
    //                 },
    //                 {
    //                     "character": "r",
    //                     "color": "YELLOW"
    //                 },
    //                 {
    //                     "character": "t",
    //                     "color": "GREY"
    //                 }
    //             ]
    //         }
    //     ]
    // }

    mockWords = [
        {word: 'qwert', colors: [COLOR_GREEN, COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_YELLOW]},
        {word: 'qasdf', colors: [COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_GREY, COLOR_GREEN]},
    ];

    mockAttempt = {word: 'atemp', colors: [COLOR_GREEN, COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_GREY]};

    getAttempts() {
        console.log("sdsdsdsdsd")
        const currentURLString = window.location.href;
        const currentURL = new URL(currentURLString);
        const chatId = currentURL.searchParams.get('chat_id')
        const userId = currentURL.searchParams.get('user_id')
        console.log(['chatId ', chatId])
        console.log(['userId ', userId])

        axios.get(
            this.prefixURL,
            {
                params: {
                    chatId,
                    userId
                },
            })
            .then(function (response) {
                console.log(['response.data ', response.data])
                return adapterResponse(response.data)
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

// {
//     "won": false,
//     "tries": [
//         {
//             "letters": [
//                 {
//                     "character": "q",
//                     "color": "GREY"
//                 },
//                 {
//                     "character": "w",
//                     "color": "GREY"
//                 },
//                 {
//                     "character": "e",
//                     "color": "YELLOW"
//                 },
//                 {
//                     "character": "r",
//                     "color": "YELLOW"
//                 },
//                 {
//                     "character": "t",
//                     "color": "GREY"
//                 }
//             ]
//         }
//     ]
// }

    // mockWords = [
    //     {word: 'qwert', colors: [COLOR_GREEN, COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_YELLOW]},
    //     {word: 'qasdf', colors: [COLOR_GREEN, COLOR_YELLOW, COLOR_GREY, COLOR_GREY, COLOR_GREEN]},
    // ];


}

function adapterResponse(response) {
    let words = []
    let tries = response.tries
    for (let i in tries) {
        let word = tries[i]
        words.push(adapterWord(word))
    }
    console.log(['adapterResponse:', words])
    return words;
}

function adapterWord(colorLettersInWord) {

    let word = ''
    let colors = []
    for (let letter in colorLettersInWord) {
        word += letter.character
        colors.push(letter.color)
    }
    return {word, colors}
}