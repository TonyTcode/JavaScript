let word = ''
let reverseWord ='' 

function palindrome(word){
  for (let index = word.length - 1; index >=0; index--){
  reverseWord += word[index]
  console.log(reverseWord)
}
  
  if(word == reverseWord){
    console.log("Word is Palindrome.")
  }
  else{
    console.log("Word is not palindrome.")
  }
}

console.log(palindrome(''))