let accountNumber : number =16956261;
console.log(accountNumber);

let accountHolderName :string ="John Doe";
//typescript superset of js
//js is a subset of ts
//whatever you write in js it is acceptable in ts also
let isaccountActive : boolean =true;
let transactionId:bigint = 123456789012234567890n;
let balance=20000
function maketransaction(amount:number):number|string{
    if(balance<amount){
        return "Insufficient balance";
    }else balance=balance-amount;
    return balance;
}
maketransaction(20050);