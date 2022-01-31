 function isLeapYear(year)
 {
    if(year%4==0){
         return true;
     }
     return false;
 }
 const myYear=2022;
 const myYearLeapYear=isLeapYear (myYear);
 console.log('is my year leap year',myYearLeapYear);


