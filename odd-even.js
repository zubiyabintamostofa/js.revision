 const num=77;
  const remainder=num%2;
  console.log(remainder==0)



  

 function isEven(num){
     if (num % 2 == 0){
         return true;
     }     return false;
    
 }
 const myNum=164;
 const isMyNumEven = isEven(myNum);
 console.log(isMyNumEven);




function isOdd(num){
    if(num%2!=0){
        return true;
    }
    return false;
}
const myNum=679;
const myOddNum=isOdd(myNum);
console.log(myOddNum);
