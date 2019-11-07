"use strict";
var mountains = [];
mountains.push({ name: "Kilimanjaro", height: 19341 }, { name: "Everest", height: 29029 }, { name: "Denali", height: 20310 });
function findMountainHeights(mountains) {
    var maxHeight = 0;
    var tallestMountain = "";
    mountains.forEach(function (mountain) {
        if (mountain.height > maxHeight) {
            maxHeight = mountain.height;
            tallestMountain = mountain.name;
        }
    });
    return tallestMountain;
}
var nameOfTallestMountain = findMountainHeights(mountains);
console.log(nameOfTallestMountain);
var products = [];
products = [
    { name: "Milk", price: 2 },
    { name: "Bread", price: 2 },
    { name: "IceCream", price: 5 }
];
function calcAverageProductPrice(products) {
    var averagePrice = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var oneProduct = products_1[_i];
        averagePrice += oneProduct.price;
    }
    return averagePrice / products.length;
}
var averageOfProducts = calcAverageProductPrice(products);
console.log(averageOfProducts);
var inventory = [
    { product: { name: "motor oil", price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "led", price: 1.0 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    var totalValue = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var item = inventory_1[_i];
        totalValue += item.product.price * item.quantity;
    }
    return totalValue;
}
var totalValue = calcInventoryValue(inventory);
console.log(totalValue);
// InventoryItem objects. It returns a number, the total value of all the products in the
// // inventory array provided as an argument.
// ○ This is calculated as follows: For each InventoryItem take the product price times
// the quantity. Add these together for all the items. For the above data, the total
// will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170.
// ● Call calcInventoryValue, passing it your products array as an argument.
// ● Store the result of the function call (
// ● Declare an interface called InventoryItem that contains the following properties:
// ○ product - Product (from above)
// ○ quantity - number
// ● Declare an array called inventory which is an array of type InventoryItem.
// ● Fill the array with the following information.
// product.name product.price quantity
// motor 10.00 10
// sensor 12.50 4
// LED 1.00 20
// ● Declare a function called calcInventoryValue. It takes one parameter, an array of
// InventoryItem objects. It returns a number, the total value of all the products in the
// inventory array provided as an argument.
// ○ This is calculated as follows: For each InventoryItem take the product price times
// the quantity. Add these together for all the items. For the above data, the total
// will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170.
// ● Call calcInventoryValue, passing it your products array as an argument.
// ● Store the result of the function call (the return value) in a variable and then console.log
// the variable. (Hint: It prints 170).
// Tests
// 1. Mountain interface exists with name (string) and height (number) properties.
// 2. mountains array exists with given data.
// 3. Product interface exists with name (string) and price (number) properties.
// 4. products array exists with several objects of data.
// 5. InventoryItem interface exists with product (Product) and quantity (number)
// properties.
// 6. inventory array exists with given data.
// 7. findNameOfTallestMountain takes Mountain array parameter and returns correct
// string.
// // 8. calcAverageProductPrice takes Product array parameter and returns correct
// number.
// 9. calcInventoryValue takes InventoryItem array parameter and returns correct
// number.
// 10. All of the functions (findNameOfTallestMountain, calcAverageProductPrice, and/or
// calcInventoryValue) that have been created are called correctly and the result stored
// and logged
