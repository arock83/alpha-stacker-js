// Create an array that contains the letters of the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    var stacker = "";
    var spaceCounter = 0;
     for (n=0; n < theAlphabetArray.length; n+=1) {
     	if (spaceCounter <3) {
     		spaceCounter +=1;
     	} else {
     		stacker += " ";
     		spaceCounter = 1;
     	}
     	stacker += alphabet[n];
     	console.log(stacker);


     }
}

// Invoke the function and pass in the array
stackLetters(alphabet)