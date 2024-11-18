const getAreaOfCircle = (radius) => {
    return Math.PI * radius * radius;
}

const getCircumfrenceOfCircle = (radius) => {
    return Math.PI * 2 * radius;
}

const getAreaOfSquare = (side) => {
    return side * side;
}

const getAreaOfTriangle = (base, height) => {
    return base * height * 0.5;
}

const radius = 5;
const side = 2;
const base = 2;
const height = 6;

console.log(getAreaOfCircle(radius));
console.log(getCircumfrenceOfCircle(radius));
console.log(getAreaOfSquare(side));
console.log(getAreaOfTriangle(base, height));