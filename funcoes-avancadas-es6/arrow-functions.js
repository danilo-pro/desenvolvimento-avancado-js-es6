// function log(value) {
//     console.log(value);
// }

var log = function(value) {
    console.log(value);
}

log('Teste');

var soma = function(a, b) {
    return a + b;
}

console.log(soma(5, 5));

// Arrow functions - são funções anônimas, você deve atribui-la a uma variável, ou passando como parâmetro a outra função
// Podemos omitir a palavra function e return em caso de uma única expressão dentro da função
var soma2 = (a, b) => a + b;
console.log(soma2(6, 6));

// Podemos omitir os parênteses dos parâmetros caso haja apenas um a ser passado para a função
var soma3 = a => 20 + a;
console.log(soma3(6));

// Retornando objetos literais
var createObj = () => ({ nome: 'Danilo Perez' });
console.log(createObj());

// A ideia de hoisting(função ser chamada antes de sua declaração), também não pode ser empregada em arrow functions
// Funções construtoras - essas não podem ser construidas com arrow functions
function Car() {
    this.foo = 'bar'
}

console.log(new Car());

// Objeto retornando ele mesmo
//Sem arrow function:
// var objt = {
//     showContext: function showContext() {
//         console.log(this);
//         this.log('Teste');
//         var _that = this;

//         setTimeout(function() {
//             _that.log('after 1000ms');
//         },1000);
//     },
//     log: function log(value) {
//         console.log(value);
//     }
// };

// objt.showContext();

// Com arrow function:
var objt = {
    showContext: function showContext() {
        // this = objt
        setTimeout(() => {
            this.log('after 1000ms');
        },1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

objt.showContext();