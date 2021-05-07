var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var arr2 = [{ name: 'Apple', type: 'fruit' }];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

var obj = {
    name: 'Juliana',
    props: {
        age: 23,
        favoriteColors: ['black', 'blue']
    }
}

// var name = obj.name;
// var name = obj.props.age;
// var color1 = obj.props.favoriteColors[0];
// var fruit1 = arr2[0].name;

// Destructuring Assignment

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(apple, apple2);
console.log(banana, banana2);
console.log(orange, orange2);
console.log(tomato, tomato2);

var { name: name2 } = obj;
var { props: { age: age2, favoriteColors: [color1, color2] } } = obj;
var [{ name: fruitName }] = arr2;

name2 = 'Karina';
age2 = 24;
color1 = 'red';
color2 = 'green';
fruitName = 'Strawberry'

console.log(name2);
console.log(age2);
console.log(color1);
console.log(color2);
console.log(fruitName);
console.log(obj);

// functions

function sum([a, b] = [2, 2]) {
    // a = arr[0];
    // b = arr[1];
    return a + b;
}

console.log(sum());

function sum2({ a, b }) {
    return a + b;
}

console.log(sum2({ a: 3, b: 3 }));