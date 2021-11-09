type StringOrNum = string | number
type objWithName = { name: string, uid: StringOrNum }

const logDetails = (uid: string | number, item: string): void => {
    console.log(`${item} has a uid of ${uid}`)
}
const logDetailsImproved = (uid: StringOrNum, item: string): void => {
    console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: { name: string, uid: string | number }): void => {
    console.log(`${user.name} says hello`)
}

const greetImproved = (user: objWithName): void => {
    console.log(`${user.name} says hello`)
}
