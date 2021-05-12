// Symbols

const uniquedId = Symbol('Hello');
const uniquedId2 = Symbol('Hello');

// const obj = {
//     [uniquedId]: 'Hello'
// }

console.log(uniquedId);
console.log(uniquedId === uniquedId2);
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertySymbols(obj));

// Well know Symbols
// Symbol.iterator
// Symbol.split
// Symbol.toPrimitive
// Symbol.toStringTag

// const obj = {
//     [Symbol.iterator]() {

//     }
// }

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

// const it = arr[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next()); // Iteração acabou

// while(true) {
//     let {value, done} = it.next();

//     console.log(value);
    
//     if (done) {
//         break;
//     }
// }

// for(let value of arr) {
//     console.log(value);
// }

// for(let value of str) {
//     console.log(value);
// }

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for(let value of obj) {
//     console.log(value);
// }

const arr2 = [...obj];

console.log(arr2);