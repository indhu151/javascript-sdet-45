"use strict"
class EncapsulationAccount
{
    a=10
    #Amount=10000
    display(){
        console.log(this.a)
        console.log(this.#Amount)
    }
    get getAmount(){
        return this.#Amount
    }
    set setAmount(Amount){
        this.#Amount=Amount
    }
}
const Account=new EncapsulationAccount()
console.log(Account);
console.log(Account.a)
//console.log(Account.#Amount)
console.log(Account.display())
console.log(Account.getAmount)
Account.setAmount=20000
console.log(Account.getAmount);