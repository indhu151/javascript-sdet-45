var str="I am an employee of TestYantra"
var ch1=" "
//without using inbuilt
for(let i=0;i<str.length;i++)
{
    var ch=str.charAt(i)
    if(i==0 &&ch!=' ' || ch!=" "&&ch.length-1==" "){
        ch1=ch1+ch
        
    }

 }
console.log(ch1);

//with using inbuilt
console.log(str.split(" ").join(""))
// console.log(str.replace(/ /g, ""))
