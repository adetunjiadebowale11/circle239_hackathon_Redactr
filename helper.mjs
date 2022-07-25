//Boluwatife Moronkeji
function redactNow(text, toBeScrambled, rePlacer) {
    const start = performance.now()
    let wordScanned = text.split(" ").length
    let newText = text;
    let numMatchedWordsScrambled = 0
    const redactArray = toBeScrambled.split(" ")
    let numOfCharsScrambled = 0
    for (let i = 0; i < redactArray.length; i++) {
      numberOfMatches = newText.toLowerCase().split(redactArray[i].toLowerCase()).length - 1
      const lengthOfMatch = redactArray[i].length * numberOfMatches;
      numMatchedWordsScrambled += numberOfMatches;
      numOfCharsScrambled += lengthOfMatch;
      const currentMatch = new RegExp(`(${redactArray[i]})`, 'gi')
      newText = newText.replaceAll(currentMatch, rePlacer ?   rePlacer : "***")    
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