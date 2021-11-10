const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
    // skills: [] // skills parameter is not in IsPerson
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the mario website', 300);
let invoices = []; // only Invoices are allowed
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = 'yoshi' // readonly
invTwo.amount = 400;
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//===================
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
