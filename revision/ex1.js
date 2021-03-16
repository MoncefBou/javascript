// function sortLetters (myString){
//     var arrayOfMyString = myString.split("");
      
//       arrayOfMyString = arrayOfMyString.sort();
      
//       myNewString = arrayOfMyString.join("");
//       console.log(myNewString);
//  }
//  sortLetters("konexio");

 // Bonus 2

 function sortLetters (myTrueString){
  
  var myString = myTrueString.toLowerCase();
  
  var arrayOfMyString = myString.split("");
    
    arrayOfMyString = arrayOfMyString.sort();
    
    myString = arrayOfMyString.join("");  
   
    var newString = "";
    
    for ( var i = 0; i <= (myTrueString.length - 1); i++) {
     
      if (myString.charAt(i).toUpperCase() == myTrueString.charAt(myTrueString.indexOf(myString.charAt(i).toUpperCase()))) {
        newString = newString + myString.charAt(i).toUpperCase();
        myTrueString = myTrueString.replace(myTrueString.charAt(myTrueString.indexOf(myString.charAt(i).toUpperCase())), '/')
        
     } else {
        newString = newString + myString.charAt(i);
        
     }
   }
   console.log(newString);

}
sortLetters("JAvaSscrIpt");
