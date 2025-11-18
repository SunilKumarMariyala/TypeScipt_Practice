var wallet = /** @class */ (function () {
    function wallet(initialBalance) {
        this.balance = initialBalance;
    }
    wallet.prototype.addMoneyToWallet = function (amount) {
        if (amount > 0)
            return this.balance += amount;
    };
    return wallet;
}());
var mywallet = new wallet(2000);
console.log("new wallet balance: ", mywallet.addMoneyToWallet(1500));
