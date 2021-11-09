let age: any = 25

age = '25'
age = true
age = { name: 'luigi' }

let mixed: any[] = []

mixed.push(5)
mixed.push('mario')
mixed.push(false)
mixed.push({ name: "mario" })

let ninja: { name: any, age: any }

ninja = { name: 'yoshi', age: 25 }
console.log(ninja)

ninja = { name: 25, age: 'yoshi' } // we can declare any type of value for `name` and `age`
console.log(ninja)
