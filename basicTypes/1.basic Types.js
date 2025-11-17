var accountNumber = 16956261;
console.log(accountNumber);
var accountHolderName = "John Doe";
//typescript superset of js
//js is a subset of ts
//whatever you write in js it is acceptable in ts also
var isaccountActive = true;
var transactionId = 123456789012234567890n;
var balance = 20000;
function maketransaction(amount) {
    if (balance < amount) {
        return "Insufficient balance";
    }
    else
        balance = balance - amount;
    return balance;
}
maketransaction(20050);
