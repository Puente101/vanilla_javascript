// Two Ways to Name Variabl
let a=3;
var y=3;


//Creating a constant
//const interest_rate = 0.3;

let name = "Poop"; // String Literal
let x = 3; // Number Literal
let poop_like = true; // Boolean Literal
let select = null; // Null Literal

// Objects
let person = {
    name: 'Poop',
    age: 10
};

console.log(person.name)
console.log(person['name'])

// Arrays
let colors = ['blue', 'red', 'purple'];
colors[3] = 'green'
console.log(colors[0])
console.log(colors)

// Functions
function add(x, y) {
    console.log(x+y)
}
add(2,4);

function poop_liker(name) {
    console.log(name + ' likes Poop')
}
poop_liker('Aaron')


function discriminant(a, b, c) {
    return (b**2 - 4*a*c)
    // Return allows that value to be reused
}
a = discriminant(4, 2, 1)

// If loop
function discriminant_test(a, b, c) {
    z = b*b - 4*a*c;
    if (z<0)
        console.log('Imaginary Solutions')
    else if (z==0)
        console.log("No Solutions")
    else if (z>0)
        console.log("Real Solutions")

}

discriminant_test(0, 2, 1)
discriminant_test(4, 2, 1)

// For Loop
for (let i=0; i<5; i++) {
    // for (InitialExpresion, Condition, PossibleIncrementExpression)
    console.log('Poop Count, ' + i)
}

/*

    Three Hour Video

                         */


var c = 'I am a';
c = c + ' string'
console.log(c)

/*
//Adding 1
myVar++;
// Subtracting 1
myVar--;
*/

function remainder(number, divisor) { 
    remainder = number % divisor
    console.log(remainder)
}

remainder(9,2)

//b = b + 9
//b += 9

//b = b-9
//b -= 9

// Length of String
var character = 'poop'
console.log(character.length)
let pee = '   '
console.log(pee)

// Arrays
let array = [[1,2], [3,4]]
console.log(array[0][0])

let initial_array = [1,2,3]
initial_array[1] = 42
console.log(initial_array)

// Appending onto Array
let tuple = [2, 4, 1, 4]
tuple.push(8, 7, 3)
console.log(tuple)

// Removing from Array
let tuptup = [1, 2, 3, 4, 5]
tuptup.pop()

console.log("New Line")








