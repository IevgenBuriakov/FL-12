let arr = [];
let arrLength = 3;

while (arr.length !== arrLength) {
    let a = +prompt('Enter the ' + (arr.length +1) + ' number', '');
    if (Number.isInteger(a) !== true || a === '') {
        while (Number.isInteger(a) !== true || a === '') {
            alert('input values should be ONLY numbers');
            a = +prompt('Enter another number', '');
            while (a <= 0) {
                alert('A triangle must have 3 sides with a positive definite length');
                a = +prompt('Enter another number', '');
            }
        }
    }
    if (a <= 0) {
        while (a <= 0) {
            alert('A triangle must have 3 sides with a positive definite length');
            a = +prompt('Enter another number', '');
            while (Number.isInteger(a) !== true || a === '') {
                alert('input values should be ONLY numbers');
                a = +prompt('Enter another number', '');
            }
        }
    }
    arr.push(parseFloat(a));
}
let side_a = arr[0];
let side_b = arr[1];
let side_c = arr[2];

if (side_a + side_b < side_c || side_b + side_c < side_a || side_a + side_c < side_b) {
    console.log('Triangle doesnt exist'); 
} else if (side_a === side_b && side_a === side_c) {
    console.log('Equilateral triangle'); 
} else if (side_a !== side_b && side_c !== side_b && side_a !== side_c) {
    console.log('Scalene triangle'); 
} else {
    console.log('Isosceles triangle'); 
}
