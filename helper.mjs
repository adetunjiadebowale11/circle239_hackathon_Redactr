//Boluwatife Moronkeji
function redactNow(text, toBeScrambled, rePlacer) {
    const start = performance.now()
    let wordScanned = text.split(" ").length
    let newText = text;
    let numMatchedWordsScrambled = 0
    const redactArray = toBeScrambled.split(" ")
    const numOfCharsScrambled = redactArray.join('').length
    for (let i = 0; i < redactArray.length; i++) {
      numMatchedWordsScrambled += newText.split(redactArray[i]).length - 1
      newText = newText.replaceAll(redactArray[i], rePlacer ?   rePlacer : "***")    
    }

    const end = performance.now()
    const time = end - start 

    return {
      Result: newText, 
      numberOfWordsScanned: wordScanned, 
      numberOfWordsScrambled: numMatchedWordsScrambled,
      numOfCharsScrambled,
      time,
    }
  }


//adesola busari
function toBeSeperated(words) {
    const wordArray = words.split(" ");
    return wordArray;
  }


export default redactNow