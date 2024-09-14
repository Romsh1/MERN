//Array
/*
    For in and For of

let arr = [10, 20, 30, 40];
for(let ar in arr){
    console.log(ar);
}

for(let ar of arr) {
    console.log(ar);
}
    */

//Multidimensional array
/*
let arr = [
    ["John", 56],
    ["Thomas", 18],
    ["Robert", 35]
]
console.log(arr);
*/

/*Copy and Spread */

/* Objects 
let obj = {
    name: "Bravo",
    age: 21
}
console.log(obj.name); */

/* Object inside Array 
let arr = [
    {user: 1, name:"tate"},
    {user: 2, name:"shelby"},
    {user: 3, name:"chad"}
]
console.log(arr);
for(let i in arr) {
    console.log(i);
}*/

/* Function inside Function */
function fun() {
    var a = 1;
    console.log("I am a function: " + a);
    function fun2() {
        var a = 2;
        console.log("I am a function: "+ a);
    }
    fun2();
}
fun();
