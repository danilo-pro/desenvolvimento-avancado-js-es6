// Antes do ES6

// function sum(a, b) {
//     console.log(arguments);
//     var value = 0;

//     for(var i = 0; i < arguments.length; i++) {
//         value += arguments[i];
//     }

//     return value;
// }

// console.log(sum(5, 5, 10, 20, 50));

// Com o ES6
// Rest operator
// Spread operator

// function sum(...args) {
//     return args.reduce((acc, value) => acc + value, 0);
// }

// const sum = (a, b, ...rest) => {
//     console.log(a, b, rest);
// } 

// const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

// const sum = (...rest) => {
//     return multiply(...rest);
// }

// console.log(sum(5, 5, 5, 2, 3));

// Spread operator pode ser aplicado para quebrar strings, arrays, objetos literais e objetos iteraveis

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(...args) {
    console.log(args);
    console.log(arguments);
}

const arr2 = [...arr, 5, 6, 7];
const arr3 = [...arr2, 8, 9, 10];

const obj = {
    test: 123,
    test2: 'Hi'
};

const obj2 = {
    test: 456,
    ...obj,
    // Sobrescreve propriedades
    test2: 'Hello'
};

const obj3 = {
    test: 123,
    subObj: {
        test: 123
    }
};

// Passa por referência
const obj4 = {obj3, subObj: { ...obj3.subObj } };

obj4.test = 456;
obj4.subObj.test = 456;

console.log(obj2);
console.log(obj4);