// //##########declaring a function#######
// function addition()
// {
//     let a=10
//     let b=20
//     let c =a + b
//     console.log(c)
// }
// //##########fuction calling#############
// addition()
// addition()
// addition()

//##########declaring a function#######
// function addition()
// {
//     let a=10
//     let b=20
//     let c =a + b
//     console.log(c)
// }
// //######parameteised function######
// function addtwovalues(a,b){
//     c=a+b
//     console.log(c)
// }
// //###### calling functions
// addition()
// //###### value pass to a function in argumant######
// addtwovalues(100,200)
// addtwovalues(50,100)
// addtwovalues(10,190)

// console.log(c)

// function addition()
// {
//     let a=10
//     let b=20
//     let c =a + b
// }
// //######parameteised function######
// function addtwovalues(a,b){
//     d = a + b
//     return d
// }
// //###### value pass to a function in argumant######
// answer = addtwovalues(100,200)

//write a function that takes an array of numbers
//and returns the array of square of the numbers
//###########Chatgpt##########
// function squareNumbers(numbers) {
//     // Map through the array and calculate the square of each number
//     const squaredNumbers = numbers.map(num => num * num);
//     return squaredNumbers;
//   }
  
//   // Example usage:
//   const numbersArray = [1, 2, 3, 4, 5];
//   const squaredArray = squareNumbers(numbersArray);
//   console.log(squaredArray); // Output: [1, 4, 9, 16, 25]

//##########teacher##########
// function square_arr(arr){
//     squared = []
//     for(let a=0;a<arr.length;a++){
//         //##sq =arr[a]**2
//         squared.push(arr[a]**2)
//     }
//     return squared
// }
// answer = square_arr([2,3,4,5,6,7,8])
// console.log(answer)

function income_calc(income){
    if (income >= 100000){
        return income*.10
    }
    else{
        if (income >= 50000){
            return income*.08
        }
        else
    return income*.01
    }
}
prompt(income_calc(60000))  
