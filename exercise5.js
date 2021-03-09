function addWithSubcharge(num1, num2){

    if (num1 <= 10) {
    num1 += 1;
    } 
    
    else {
    num1 += 2;
    }
    if (num2 <= 10) {
    num2 += 1;
    } 
    
    else {
    num2 += 2;
    }
    return num1 + num2;
    
}

console.log(addWithSubcharge(10, 3));