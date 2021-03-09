// function sandwichCalculator(slicesOfBread){
// var sandwich = Math.trunc(slicesOfBread/2);
// return sandwich;
// }

// console.log(sandwichCalculator(11));

function sandwichWithCheese(slicesOfBread, slicesOfCheese){
    var pairOfBreads = Math.trunc(slicesOfBread/2);
    if(pairOfBreads >= slicesOfCheese){
        return console.log(slicesOfCheese);
        
    }

    if(pairOfBreads < slicesOfCheese){
        return console.log(pairOfBreads);
    }


}sandwichWithCheese(10, 18);