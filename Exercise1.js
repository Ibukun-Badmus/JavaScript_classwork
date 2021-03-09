function checksumof50(num1, num2){
    if(num1==50 || num2 == 50){
        return true;
    }

    if(num1 + num2 == 50){
        return true;
    }
    else{
        return false;
    }

}

console.log(checksumof50(10, 30))