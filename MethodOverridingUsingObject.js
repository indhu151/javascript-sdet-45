let Account={
    name:"Pia",
    age:27,
    AccType:"Savings",
    Accdetails:function (){
        return this.age
    }
}
data=Object.create(Account)
console.log(data)
console.log(Account)
console.log(data.age)
data.age=22
console.log(data.age)
console.log(data.Accdetails())
console.log(Account)
console.log(data);
console.log(Account.age)

// let person={
//     f_name:"diya",
//     l_name:"sharma",
// }
// let human=person
// console.log(typeof(human))
// console.log(person.f_name)
// console.log(human.f_name)
// person.f_name="Ria"
// console.log(person.f_name);
// console.log(human.f_name)
// console.log(human);
