
//possible lower case letters the players have for guessing the correct word
var smallLetters = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//also possible upper case letter options the players have for guessing the word
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//array of words the players need to guess in order to win
var bands = ["incubus", "radiohead", "sublime", "nirvana", "oasis"]

//whenever a key is pressed let player know that game has begun
document.onkeyup = function() {
	alert("Game Initiated");
}
