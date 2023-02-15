//to print vowelscount
function vowelscount(input){
    console.log(input)
    countA=0
    countE=0
    countI=0
    countO=0
    countU=0
    for(let i=0;i<input.length;i++)
    {
        str=input.charAt(i).toLowerCase()
    if(str=='a'){
    countA++
    }
    else if(str=='e'){
    countE++
    }
    else if(str=='i')
    countI++
    else if(str=='o')
    countO++
    else if( str=='u')
    countU++
    else{
    }
    }
    console.log("vowel A count is"+countA)
    console.log("vowel E count is"+countE)
    console.log("vowel I count is"+countI)
    console.log("vowel O count is"+countO)
    console.log("vowel U count is"+countU)
}  
    vowelscount("JavaScript")

//Arrow function
acc=(name,type,Amt)=>
{
console.log(name)
console.log(type)
console.log(Amt)
}
acc("Raj","savings",10000)

//call back function
function Accountdetails(f_name,l_name){
	console.log(f_name+" "+l_name+" "+"account") 
}
function personaldetails(type,Number){
	console.log(type+" "+Number+" "+"account")
}
function transaction(Amt,branch){
	console.log(Amt+" "+branch+" "+"account")
}
function acc_summ(data1,data2,details){
	details(data1,data2)
}
acc_summ("Raj","verama",Accountdetails)
acc_summ("Savings",10011134,personaldetails)

//object.create
let Account={
	name:"Ria",
	type:"Savings",
	branch:"BTM",
}
person=Object.create(Account)
person.branch="HSR"
console.log(Account.branch)
console.log(person.branch)


//filter method
var Amount=[10000,40000,30000,20000]
Amount.filter(element=>{
    
    console.log(element>20000)
})