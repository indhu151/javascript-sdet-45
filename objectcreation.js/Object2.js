function studentDetails(name,id,rank,subject,abc)
{
    this.name=name
    this.id=id
    this.rank=rank
    this.subject=subject
    this.abc=abc
}

var data1=new studentDetails('rahul',23,3,['sel','js'],function(){return "data"})
var data2=new studentDetails ('rani',32,5)
console.log(data1)
console.log(data1.abc())//to print a function
console.log(data1.subject)//to print array
console.log(data2)
console.log(data1.name)
console.log(data2.id)//to print particular value
var data=new studentDetails()
console.log(data)//all the details with undefined
