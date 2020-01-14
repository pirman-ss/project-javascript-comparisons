function greetings(name) {
    let greet = `Hello ${name}`;

    return greet;
}

console.log(greetings('eko'));


// =====

let age = 18;

function checkisAllowed(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(checkisAllowed(age));
console.log(checkisAllowed(20));

// ==== function in variable

let greet = function(name) {
    return `hello ${name}`;
};

console.log(greet('pirman'));

// ==== arrow function es6

const add = (number1, number2) => {
    let result = number1 + number2;
    return result;
};

console.log(add(2,3));

// ==== callback function

function greet2(name) {
    return `Hello ${name}`
}

function processCallback(callback, name2) {
    let name = name2;

    callback(name);
}

console.log(processCallback(greet, ))

// ==== function hoisting

console.log(substract(3, 3))

function substract(number1, number2) {
    let result = number1 - number2;

    return result;
}