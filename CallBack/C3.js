function greet(name,myFunction)
{
    console.log("hello world");
    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}
//callback function
function sayName(name)
{
    console.log("hello" + " " + name);
}
setTimeout(greet,2000,'john',sayName);
//this program execute asyncronously