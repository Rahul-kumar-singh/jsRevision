function sum(x,y,z)
{
    return x+y+z;
}
const number = [1,2,3];
let spread1 = sum(...number);
console.log(spread1);