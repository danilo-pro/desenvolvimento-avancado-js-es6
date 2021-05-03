// lazy evaluetion
function randonNumber() {
    console.log('Generating a rabdom number...');
    return Math.random() * 2;
}

function multiply(a = randonNumber(), b = a) {
    // b = b || 1;
    // b = typeof b === 'undefined' ? 1 : b;
    // if(typeof b === 'undefined') {
    //     b = 1;
    // }

    return a * b;
}

console.log(multiply());
console.log(multiply());
// console.log(multiply(5)); = NaN