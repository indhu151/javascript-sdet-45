class person
{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    show(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.Amount);
    }

}
class Account extends person
{
    constructor(name,age,Amount,type)
    {
        super(name,age)
        this.Amount=Amount
        this.type=type
    }

    display(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.Amount)
        console.log(this.type)
    }

}
var Account1=new Account("Raj",22,10000,"savings")
// console.log(Account1);
// console.log(Account1.display());
// console.log(Account1.show());
// var person1=new person("Ria",33)
// console.log(person1);
// console.log(person1.show());
// console.log(person1.display()); //TypeError:person1.display() is not a function

module.exports=Account1

