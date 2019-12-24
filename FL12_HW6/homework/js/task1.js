let arr = [];
let arrLength = 3;

while (arr.length !== arrLength) {
    let a = +prompt('Enter the ' + (arr.length + 1) + ' number', '');
    if (Number.isInteger(a) !== true || a === '') {
        while (Number.isInteger(a) !== true || a === '') {
            alert('Invalid input data');
            a = +prompt('Enter another number', '');
        }
    }

    arr.push(parseFloat(a));
}
let number_a = arr[0];
let number_b = arr[1];
let number_c = arr[2];
let pow_2 = 2;
let descCoef = 4;

let discreminant = Math.pow(number_b, pow_2) - descCoef * number_a * number_c;
let x = -number_b / (pow_2 * number_a);
let x1 = (-number_b + Math.sqrt(discreminant)) / (pow_2 * number_a);
let x2 = (-number_b - Math.sqrt(discreminant)) / (pow_2 * number_a);
console.log('Discriminant = ', discreminant);
if (discreminant === 0) {
    console.log('x = ', x);
} else if (discreminant > 0) {
    console.log('x1 = ', x1);
    console.log('x2 = ', x2);
} else {
    console.log('no solution')
}