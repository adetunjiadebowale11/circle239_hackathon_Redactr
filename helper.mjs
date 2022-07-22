// Boluwatife Moronkeji
// function redactNow(text, toBeScrambled, rePlacer) {
//     let wordScanned = text.split(" ").length
//     let newText = text;
//     const redactArray = toBeScrambled.split(" ")
//       for (let i = 0; i < redactArray.length; i++) {
//       newText = newText.replaceAll(redactArray[i], rePlacer ? rePlacer : "***")
//     }
//     return {Result: newText, numberOfWordsScanned: wordScanned}
//   }

function redactNow(text, toBeScrambled, rePlacer) {
    let wordScanned = text.split(" ").length
    let newText = text;
    const redactArray = toBeScrambled.split(" ")
      for (let i = 0; i < redactArray.length; i++) {
      newText = newText.replaceAll(redactArray[i], rePlacer ? rePlacer.repeat(redactArray[i].length) : "*".repeat(redactArray[i].length))
    }
    return {Result: newText, numberOfWordsScanned: wordScanned}
  }

//adesola busari
//   function ToBeSeparated(words){
//   var Separated =[]

//     for (var i=0; i < words.length; i++){
//       varStr = words[1].trim()
//     if (str.indexOf('')>-1)
//       Separated =Separated.Concat(Str.Split(''));
//     else
//       Separated.Push(Str);
//     }
//     return Separated;
// }
// console.log(ToBeSeparated( ))

function toBeSeperated(words) {
    const wordArray = words.split(" ");
    return wordArray;
  }


module.exports = {
    redactNow,
    toBeSeperated, 
}