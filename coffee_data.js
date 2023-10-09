// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]

module.exports = coffeeMenu

// coffeeMenu.forEach((drink) => {
//     console.log(drink.name);
// });

// const underFive = coffeeMenu.filter((drink) => drink.price <= 5);

// console.log("drinks under $5:");
// underFive.forEach((drink) => {
//     console.log(drink.name);
// });

// const evenPrice = coffeeMenu.filter((drink) => drink.price % 2 == 0 )

//  console.log("drinks with even prices:");
//  evenPrice.forEach((drink) => {
//      console.log(drink.name);
//  });

//  const seasonalDrink= coffeeMenu.filter((drink) => drink.seasonal === true )

//   console.log("drinks that are seasonal:");
//   seasonalDrink.forEach((drink) => {
//       console.log(drink.name);
//   });

const seasonalDrinkWithBeans = coffeeMenu
    .filter((drink) => drink.seasonal === true)
    .map((drink) => `${drink.name} with imported beans`);

console.log("Seasonal drinks with imported beans:");
seasonalDrinkWithBeans.forEach((drink) => {
    console.log(drink);
});