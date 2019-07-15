let names = ["Alex", "John", "Mary", "Steve", "John", "Steve"]



let FinalList = [] 

function doesNameExists(name) {
    
  let alreadyExists = false 
  
  for(let index =0; index < FinalList.length; index++) {
    if(name == FinalList[index]) {
      alreadyExists = true 
      break
    }
  }
  
  return alreadyExists
  
}

for(let index = 0; index < names.length; index++) {
  
    let name = names[index]
    // if the name does not exists in duplicateFreeArray
    if(!doesNameExists(name)) {
       FinalList.push(name)
    } 
}
console.log(FinalList)