const MATH_PI = 3.14;
const radius = 10;
const result = MATH_PI * radius * radius;

let result1 = 10 * 10;
result1 *= MATH_PI;

const a = 10;
const b = 20;
let c = 40;

c = c - a;

c -= a;

c = c + b;

c += b;

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;

/* EQUALS */

const name = "Robert";

console.log(MATH_PI === 3.14);

console.log(name === "Steven");

console.log(radius > 10);
console.log(radius >= 10);
console.log(radius < 100);
console.log(radius !== 0);


const formula = 'circumference';
// ternary
result = formula === 'circumference'
    ? MATH_PI * (2 * radius)
    : MATH_PI * (radius * radius);


const r = 10;
name = "Robert";

console.log(name !== "Steven");

// usind 'and'
const res = MATH_PI === 3.14 && radius >= 10
    ? MATH_PI * (2 * r)
    : MATH_PI * (r * r);

console.log("result ", res);

// using  'not' and 'or'
const res2 = radius !== 0 || radius < 1000
    ? MATH_PI * (2 * r)
    : MATH_PI * (r * r);

console.log("result 2 ", res2);

a = 10;
b = 100;
c = 3;

// example with if
if (a === 10) {
    console.log("a is equal 10");
}

// example with if..else
if (b > 1) {
    console.log("b is bigger than 1");
} else {
    console.log("b is smaller than 1");
}

// example with else...if
if (c > 1) {
    console.log("c is bigger than 1");
} else if (c == 10) {
    console.log("c is equal 10");
} else {
    console.log("c is smaller than 1");
}

const day = "1";

switch (day) {
    case "1": {
        console.log("Monday");
    }
        break;

    case "2": {
        console.log("Tuesday");
    }
        break;

    case "3": {
        console.log("Wednesday");
    }
        break;

    case "4": {
        console.log("Thursday");
    }
        break;

    case "5": {
        console.log("Friday");
    }
        break;

    case "6": {
        console.log("Saturday");
    }
        break;

    case "7": {
        console.log("Sanday");
    }
        break;

    default: {
        console.log("Invalid number");
    }
}





