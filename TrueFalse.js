
	
	let array = [4, 9, 15, 674, 58, 3]
	item = 32
	
	function inList(x){
	    for(let index = 0; index<array.length; index++){
	        if(array[index] == item){
	            console.log(true)
	            break
	        }else{
	            console.log(false)
	        }
	    }
	}
	result = inList(item)
	console.log(result)