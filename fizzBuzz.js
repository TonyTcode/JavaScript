

function FizzBuzz(i){
    let number =i

    if (i % 5 ==0){
        console.log('fizz')
}

    if (i % 3 ==0){
        console.log('buzz')
}

    if (i % 3 ==0 && number % 5 ==0){
        console.log('Fizz Buzz')
}
}
console.log(FizzBuzz())