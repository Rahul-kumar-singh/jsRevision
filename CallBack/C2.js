//function
function greet(name,callback)
{
    console.log("hi" + `${name}`);
    callback();

}
//callback function
function callMe()
{
   console.log("hello I am callback function");
}
//passing a function as a argument.
greet('peter',callMe);