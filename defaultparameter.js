// function cart(name,quantity=1){
//     console.log("product"+" "+name+" "+"is of quantity"+" "+quantity)
// }
// cart("kurti",4)

// function country(name="India"){
//     console.log("country"+" "+"name"+" "+"is"+" "+name)
// }
// country("US")

// function sum(a,b,c=30,d){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// sum(1,2,undefined,d)
class Encapsulation
{
    #c=50
    sum(a,b,c,d){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
get getvalue(){
    return this.#c
}
set setvalue(val){
    this.#c=val
}
}
data=new Encapsulation()
//data.sum(10,20,40)
console.log(data.sum(10,20,40));
