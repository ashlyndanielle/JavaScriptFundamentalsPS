const carId = 100;

console.log('carstuff:', carstuff);
console.log('____________________________________');
var carstuff = 100;

// console.log('teastuff:', teastuff);
// let teastuff = 100;

if (true) {
  let people = 'Ashlyn';
  var human = 'not human';
}
console.log('human: ', human);
console.log('____________________________________');
// console.log('people: ', people); //reference error

function sendCars(day, ...allCarIds) {
  console.log('all car ids:', allCarIds);
  allCarIds.forEach(id => console.log(day, id));
}

sendCars('Monday', 100, 200, 555);
console.log('____________________________________');

let bookIds = [1, 2, 3];
let [book1, book2, book3] = bookIds;

let colors = ['purple', 'blue', 'red'];
let colorOne, remainingColors;
[colorOne, ...remainingColors] = colors;

console.log('colorOne: ', colorOne, 'remainingColors: ', remainingColors);
console.log('____________________________________');

let [, ...allExceptFirst] = bookIds;
console.log('all except first: ', allExceptFirst);
console.log('____________________________________');

let [one, two, ...rest] = bookIds;
console.log(one, two, rest);
console.log('____________________________________');