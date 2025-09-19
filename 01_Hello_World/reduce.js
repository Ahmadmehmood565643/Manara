// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
//   { name: 'anna', age: 35, position: 'intern' },
// ]

// const DailyTotal = people.reduce((total, person) => {
//   total += person.age
//   return total
// }, 0)


const cart = [
   { Title: 'Samsung Galaxy S21', Price: 799, Amount: 5 },
   { Title: 'iPhone 12', Price: 699, Amount: 3 },
   { Title: 'Google Pixel 5', Price: 599, Amount: 4 },
   { Title: 'OnePlus 9', Price: 729, Amount: 2 },
]

/**
 * Calculates the total number of items and the total price in the cart using Array.prototype.reduce.
 *
 * @param {Array<{ Price: number, Amount: number }>} cart - The array of cart items, each with a Price and Amount.
 * @returns {{ totalitems: number, carttotal: number }} An object containing the total number of items (`totalitems`) and the total price (`carttotal`).
 */
const { totalitems, carttotal } = cart.reduce((acc, cartitem) => {
    const { Price, Amount } = cartitem;
    acc.carttotal += Price * Amount;
    acc.totalitems += Amount;
    return acc;
}, 
{
    totalitems: 0,
    carttotal: 0,
});

const formattedCartTotal = parseFloat(carttotal).toFixed(2);
console.log(totalitems, formattedCartTotal);


const url  = "https://api.github.com/users/john-smilga/repos?per_page=100"