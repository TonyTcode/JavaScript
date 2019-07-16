
	let numbers = [15, 48, 97, 789, 5, 456, 8, 90, 67]
	
	function smallestElement(){
	    let minNumber = numbers[0]
	    for(let index = 0; index<numbers.length; index++){
	        if(numbers[index] < minNumber){
	            minNumber = numbers[index]
	        }
	    }
	    return minNumber
	}
	smallest = smallestElement()
	console.log(smallest)