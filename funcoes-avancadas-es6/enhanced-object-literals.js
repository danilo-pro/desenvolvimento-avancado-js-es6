var objt = {
    prop1: 'Digital Innovation One'
}

var prop2 = 'Innovation One Digital';

var objt2 = {
    prop2
}

function method1(a, b) {
    return a + b;
}

var objt3 = {
    method1
}

var objt4 = {
    sum(a, b) {
        return a + b;
    }
}

var propName = 'Teste';

var objt5 = {
    [propName + ' concat']: 'prop value'
};

console.log(objt);
console.log(objt2);
console.log(objt3.method1(2, 2));
console.log(objt4.sum(2, 2));
console.log(objt5);

var obj = {
    sleep: function() {
      setTimeout(() => {
        console.log(this);
      }, 1000);
    }
}
  
obj.sleep();