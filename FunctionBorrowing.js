var Account={
    f_name:"Ria",
    l_name:"sharma",
    details:function(){
        console.log(`this is ${this.f_name} ${this.l_name}`);
    }
}

var Account2={
    f_name:"Pooja",
    l_name:"kumar",
    display:function(){
        console.log("this is"+this.f_name+" "+this.l_name);
    }
}

function message(msg1,msg2){
    console.log(`${msg1} ${this.f_name} ${this.l_name} your account is ${msg2}`)
}
Account.details()
//using call() method
// Account.details.call(Account2)//function borrowing
// Account2.display.call(Account)
// message.call(Account,"hi","created")
// message.call(Account2,"hi","not created")

// //using bind
// var data=Account.details.bind(Account2)
// console.log(typeof(data));
// data()
// var data1=message.bind(Account,"hi","created")
// data1()

//using apply
Account.details.apply(Account2)
message.apply(Account,["hi","created"])






