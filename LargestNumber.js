
	
	let myArray = [10, 23, 453, 5893, 393, 789, 8567, 6, 87758]
	
	function largestElement(){
	    let maxNumber = myArray[0]
	    for(let index = 0; index<myArray.length; index++){
	        if(myArray[index] > maxNumber){
	            maxNumber = myArray[index]
	        }
	    }
	    return maxNumber
	}
	answer = largestElement()
	console.log(answer)