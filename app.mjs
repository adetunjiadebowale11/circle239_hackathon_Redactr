function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
    console.log('make magic in here!');
  
    const header = document.querySelector('h2');
    if(header) {
      header.textContent = 'make some magic here!!';
    }
  }
//adesola busari
  function ToBeSeparated(words){
  var Separated =[]

    for (var i=0; i < words.length; i++){
      varStr = words[1].trim()
    if (str.indexOf('')>-1)
      Separated =Separated.Concat(Str.Split(''));
    else
      Separated.Push(Str);
    }
    return Separated;
}
console.log(ToBeSeparated( ))
// Boluwatife Morenikeji
  function redactNow(text, toBeScrambled, rePlacer) {
    let wordScanned = text.split(" ").length
    let newText = text;
    const redactArray = toBeScrambled.split(" ")
      for (let i = 0; i < redactArray.length; i++) {
      newText = newText.replaceAll(redactArray[i], rePlacer ? rePlacer : "***")
    }
    return {Result: newText, numberOfWordsScanned: wordScanned}
  }

  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //