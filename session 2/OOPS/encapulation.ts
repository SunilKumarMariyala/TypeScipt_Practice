class wallet{
    private balance:number;
    constructor(initialBalance:number){
        this.balance=initialBalance;
    }
    addMoneyToWallet(amount:number){
        if(amount>0) return this.balance+=amount;
    }
}
let mywallet=new wallet(2000);
console.log("new wallet balance: ",mywallet.addMoneyToWallet(1500));