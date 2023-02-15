var Account={
	f_name:"Ria",
	l_name:"sharma",
	details:function(){
	console.log(`${this.f_name} ${this.l_name} account `)
}
}

var Account1={
	f_name:"Pooja",
	l_name:"kumar",
	accdetails:function(){
	console.log(`${this.f_name} ${this.l_name} account `)}
}
function message(msg1,msg2){
console.log(`${this.f_name} ${this.l_name} ${msg1} ${msg2}`)
}
console.log(Account)
Account.details.call(Account1)
var person=Account.details.bind(Account1)
person()
var person2=message.bind(Account,"account","is not created")
person2()
Account1.accdetails.apply(Account)
message.apply(Account1,["account","is created"])