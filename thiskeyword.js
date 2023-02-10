var customer={
    custname:"Rajesh",
    age:33,
    Accounttype:"savings",
    Type:function(){
        console.log(this.Accounttype)
    }
}
let r=54
var Account={
        b:24,
        branch:"BTM",
        Amount:100000,
        details:function(){
            console.log(this.b)
            console.log(this.r)
            console.log(this.branch)
            console.log(this.age)
            console.log(this.Type)
            console.log(this.custname)
        }
}
customer.Type()
Account.details()