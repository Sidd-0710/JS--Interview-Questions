let isLeapyear = (year) =>{
    if ((year % 4 === 0 && year % 100 !==0) || year % 400 === 0) {
        return "Leap Year ";        
    } else{
        return "Not a Leap Year";
    }
}

console.log(isLeapyear(2023));
