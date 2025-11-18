abstract class FoodSevice {
  abstract searchRestaurant(food: string): void;
  abstract pay(amount: number): void;
  abstract orderedFood(food: string, quantity: number): void;
  closureMessage(msg: string) {
    console.log(msg);
  }
}
class swiggy extends FoodSevice {
  searchRestaurant(food: string): void {
    console.log("searching for the restaurant for the food ", food);
  }
  pay(amount: number): void {
    console.log("paying the amount", amount);
  }
  orderedFood(food: string, quantity: number): void {
    console.log("ordered food ", food, "with quantity", quantity);
  }
}
class zomata extends FoodSevice {
  searchRestaurant(food: string): void {
    console.log("searching zomata restaurant for the food ", food);
  }
  pay(amount: number): void {
    console.log("paying the amount to zomata", amount);
  }
  orderedFood(food: string, quantity: number): void {
    console.log("ordered food from zomata ", food, "with quantity", quantity);
  }
}
let swiggyService = new swiggy();
swiggyService.closureMessage("Welcome to swiggy");
swiggyService.searchRestaurant("Pizza");
swiggyService.orderedFood("Pizza", 2);
swiggyService.pay(500);

let zomataService = new zomata();
zomataService.closureMessage("Welcome to zomata");
zomataService.searchRestaurant("Burger");
zomataService.orderedFood("Burger", 3);
zomataService.pay(300);
