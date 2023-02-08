class person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
     a=10;
    static b=5;
   static demo(){
        var a=30
        console.log(this.a)
        console.log(this.b)
        var p=new person()
        console.log(p.a)
        console.log(a)
    }
    sample(){
       a=10
        console.log(this.a)
        console.log(this.a)
        console.log(this.b)
        console.log(person.b)
    }
}
 var data=new person("Ria",22)
//  console.log(data)
//  console.log(data.name)
//  console.log(data.age)
//  console.log(data.a)
//  console.log(data.b)
//  console.log(person.b)
person.demo()
//data.sample()