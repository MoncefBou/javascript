function sortLetters (myString){
    var letters = myString.split("")
      
      letters = letters.sort()
      
      letters = letters.join("")
      console.log(letters)
 }
 sortLetters("konexio")