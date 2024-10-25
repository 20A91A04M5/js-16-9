// relational operations :- >,<,>=,<=,==,!=,===
var a=5
var b=5
if (a!=b){
    console.log(true)
}
else{
    console.log(false)
}

// Arithmatic operations:-+,-,*,/,%,**
var a=5
var b=2
console.log(a**b)
console.log(a%b)

// logical operations :- &&,||

var a=5
var b=10
if (a<b || a>b){
    console.log("true")
}
else{
    console.log("false")
}

/// conditional statements

// swith case 

let light="1"
switch(light){
    case "1":
        console.log("on")
        break
    case "0":
        console.log("off")
        break
    default:
        console.log("no");
}

// if -else-else if

mark=75
if (mark>90){
    console.log("A")
}
else if(mark<=90 && mark>80){
    console.log("B")
}
else if(mark<=80 && mark>70){
    console.log("c")
}
else{
    console.log("d")
}

//terninary operator

let x=40
let y=10
let z=9

let res=(x>y && x>z)?console.log(`${x} is greater`):(y>x && y>z) ? console.log(`${y} is greater`):console.log(`${z} is greater`);

