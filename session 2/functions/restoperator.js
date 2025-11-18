function displayFullname(firstname) {
    var othername = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        othername[_i - 1] = arguments[_i];
    }
    console.log(firstname + othername.join("  "));
}
displayFullname("John", "Wick", "Cena", "Smith");
displayFullname("Alice");
displayFullname("Bob", "Marley");
function calulatetotalprice() {
    var charges = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        charges[_i] = arguments[_i];
    }
    console.log("total price is: ", charges.reduce(function (prev, curr) { return prev + curr; }, 0));
}
calulatetotalprice(100, 200, 50);
calulatetotalprice(500, 150);
calulatetotalprice(300);
var pd1 = { name: "laptop", price: 60000 };
var pd2 = { name: "phone", price: 20000 };
var pd3 = { name: "tablet", price: 35000 };
function addproducts() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var total = 0;
    items.map(function (p) { return (total += p.price); });
    return total;
}
console.log("Total product price: ", addproducts(pd1, pd2, pd3));
console.log(addproducts(pd1, pd2));
console.log(addproducts(pd3));
