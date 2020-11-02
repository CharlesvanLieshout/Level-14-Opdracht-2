const calculateSupply = function(age, amountPerDay){
const maxAge = 88;
    let yearsLeft = maxAge - age;
let amountPerYear = 365 * amountPerDay;
let totalNumber = (yearsLeft * amountPerYear);
console.log('You will need ' + totalNumber + ' to last you until the ripe old age of 88');

}

calculateSupply(87, 2);