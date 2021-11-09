let greet: Function

// greet = 'hello'

greet = () => {
    console.log('hello, again')
}

const add = (a: number, b: number, c?: number | string): void => {
    console.log(a + b)
    if (c !== undefined) {
        console.log(c)
    }
}

add(1, 3)

const minus = (a: number, b: number) => {
    return a - b
}

let result = minus(10, 7)
// result = 'something else' // we cannot change the type number

const minus_2 = (a: number, b: number): number => {
    return a - b
}