//arrays
let names = ['luigi', 'mario', 'Rick']

// names = 'hello' // cannot change type of variable

names.push('toad')
// names.push(2) // number is not allowed

let numbers = [10, 20, 30, 40]

numbers.push(25)
// numbers.push('shaun') // string is not allowed

let mixed = ['ken', 4, 'charlie', 8, 10]

mixed.push('hi')
mixed.push(20)
mixed[0] = 1

// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30,

}

ninja.age = 40
ninja.name = 'charlie'
// ninja.belt = 10
// ninja.skills = 'something' // cannot define non-existing properties

ninja = {
    name: 'rick',
    belt: 'orange',
    // age: '200' // we have to have the same structure as before (number type)
    age: 40,
    // skills: [] // we have to have the same structure as before (skills property)
}