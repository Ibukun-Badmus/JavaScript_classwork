function checkpositiveandnegativeintegers(int1, int2){
    if((int1 < 0 && int2 > 0) || int1 > 0 && int2 < 0){
        return true;

    } 

    else{return false;

    }
    
}

console.log(checkpositiveandnegativeintegers(-6, 2))