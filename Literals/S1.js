//Expression Substitution
//Template literals allow expressions in strings:
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

//Automatic replacing of expressions with real values is called string interpolation.