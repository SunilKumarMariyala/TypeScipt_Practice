function calulateArea(radius:number):number; //circle
function calulateArea(a:number, b:number): number; //rectangle
function calulateArea(a:number, b?:number, c?:number): number {
    let PI=3.14;
    if(b){
        return a*b; //rectangle area
    }else{
        return PI*a*a; //circle area
    }
}
console.log("Area of circle: ",calulateArea(5));
console.log("Area of rectangle: ",calulateArea(5,10));