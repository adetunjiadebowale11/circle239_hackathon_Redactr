import redactNow from "../helper.mjs";
import {content, scramble, button, wordScrambled} from '../elements.mjs'

button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = redactNow(content.value, scramble.value, '***')
    wordScrambled.value = result.Result
})