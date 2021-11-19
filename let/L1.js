let x = 1;//Global Scope

if(x === 1)
{
    let x = 2;//Local Scope
    console.log(x);
}
console.log(x);