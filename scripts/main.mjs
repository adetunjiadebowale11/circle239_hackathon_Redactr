import redactNow from "../helper.mjs";
import {content, scramble, button, wordScrambled, wordsScanned, numWordsScrambled, numCharsScrambled, time} from '../elements.mjs'

button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = redactNow(content.value, scramble.value, '***')
    wordScrambled.value = result.Result
    wordsScanned.innerText = `Words scanned: ${result.numberOfWordsScanned}`;
    numWordsScrambled.innerText = `Number of words scrambled: ${result.numberOfWordsScrambled}`;
    numCharsScrambled.innerText = `Number of characters scrambled: ${result.numOfCharsScrambled}`;
    time.innerText = `Time: ${result.time} milliseconds`;
})