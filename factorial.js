// var factorial=1;
// for(var i=1;i<=7;i++){
    
//     factorial=factorial*i;
// }
// console.log(factorial);


// factorial-function
/*
let factorial=1;
for(let i=1;i<=5;i++){
    factorial=factorial*i;
}console.log(factorial);
*/
function getFactorial(number){
    let factorial =1;
    for (let i=1;i<=number;i++)
    {
        factorial=factorial*i;
    }
    return factorial;
}
var firstFactorial=getFactorial(10);
console.log('factorial of 9',firstFactorial);