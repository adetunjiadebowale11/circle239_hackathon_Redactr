//Boluwatife Moronkeji
function redactNow(text, toBeScrambled, rePlacer) {
    let wordScanned = text.split(" ").length
    let newText = text;
    const redactArray = toBeScrambled.split(" ")
      for (let i = 0; i < redactArray.length; i++) {
      newText = newText.replaceAll(redactArray[i], rePlacer ? rePlacer : "***")
    }
    return {Result: newText, numberOfWordsScanned: wordScanned}
  }


//adesola busari
function toBeSeperated(words) {
    const wordArray = words.split(" ");
    return wordArray;
  }


export default redactNow