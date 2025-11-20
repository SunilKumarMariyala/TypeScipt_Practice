function validateEmail(input:string):boolean{
    const emailRegExp:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegExp.test(input);
}   
function validatePassword(input:string):boolean{
    const passwordRegExp:RegExp =
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegExp.test(input);
}
function isvalidphone(input:string):boolean{
    return true;
}
console.log(validateEmail("QG4w5@example.com"));
console.log(validatePassword("QG4w5@gmail.com"));
console.log(validatePassword("QG4w5@Aa"));
console.log(isvalidphone("1234567890"));
