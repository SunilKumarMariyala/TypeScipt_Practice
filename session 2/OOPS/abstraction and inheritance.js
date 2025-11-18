var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FoodSevice = /** @class */ (function () {
    function FoodSevice() {
    }
    FoodSevice.prototype.closureMessage = function (msg) {
        console.log(msg);
    };
    return FoodSevice;
}());
var swiggy = /** @class */ (function (_super) {
    __extends(swiggy, _super);
    function swiggy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    swiggy.prototype.searchRestaurant = function (food) {
        console.log("searching for the restaurant for the food ", food);
    };
    swiggy.prototype.pay = function (amount) {
        console.log("paying the amount", amount);
    };
    swiggy.prototype.orderedFood = function (food, quantity) {
        console.log("ordered food ", food, "with quantity", quantity);
    };
    return swiggy;
}(FoodSevice));
var zomata = /** @class */ (function (_super) {
    __extends(zomata, _super);
    function zomata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    zomata.prototype.searchRestaurant = function (food) {
        console.log("searching zomata restaurant for the food ", food);
    };
    zomata.prototype.pay = function (amount) {
        console.log("paying the amount to zomata", amount);
    };
    zomata.prototype.orderedFood = function (food, quantity) {
        console.log("ordered food from zomata ", food, "with quantity", quantity);
    };
    return zomata;
}(FoodSevice));
var swiggyService = new swiggy();
swiggyService.closureMessage("Welcome to swiggy");
swiggyService.searchRestaurant("Pizza");
swiggyService.orderedFood("Pizza", 2);
swiggyService.pay(500);
var zomataService = new zomata();
zomataService.closureMessage("Welcome to zomata");
zomataService.searchRestaurant("Burger");
zomataService.orderedFood("Burger", 3);
zomataService.pay(300);
