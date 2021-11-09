// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi' // age must be a string
age = 30

// isLoggedIn = 25 // isLoggedIn must be a boolean
isLoggedIn = true;

// arrays
let ninjas: string[]
// ninjas = [10, 23] // not string values
ninjas = ['charlie', 'john']

// ninjas.push(1) // cannot push number
ninjas.push('shaun')

// union types
let mixed: (string | number)[];
mixed.push('some string')
mixed.push(10)

// mixed.push(false) // cannot push boolean
console.log(mixed)

let uid: string | number
uid = '12345ad'
uid = 12345

//objects
let ninjaOne: object
ninjaOne = { name: 'yoshi', age: 30 }
ninjaOne = []

let ninjaTwo {
    name: string,
    age: number,
    beltColour: string
}

ninjaTwo = { name: name, age: 'someAge', beltColour: 'black' }

