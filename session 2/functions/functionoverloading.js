function calulateArea(a, b, c) {
    var PI = 3.14;
    if (b) {
        return a * b; //rectangle area
    }
    else {
        return PI * a * a; //circle area
    }
}
console.log("Area of circle: ", calulateArea(5));
console.log("Area of rectangle: ", calulateArea(5, 10));
