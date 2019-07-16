// Ascending order 
	
	const newNumbers = [3, 4, 5, 6, 7, 8, 1]
	let ascending = newNumbers.sort()
	console.log(ascending)
	
	// Descending order
	
	const myNewNumbers = [1, 4, 3, 5, 2, 6, 7, 10]
	function desNumbers(a,b){
	    return b-a
	}
	console.log(myNewNumbers.sort(desNumbers))