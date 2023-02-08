function sum(a,b){
    console.log("sum ="+(a+b))
}
function sub(a,b){
    console.log("sub ="+(a-b))
}
function mul(a,b){
    console.log("mul ="+(a*b))
}
function per(a,b){
    console.log("per ="+(a/b))
}
function arithmetic(a,b,operation){
   operation(a,b)
}
arithmetic(20,4,sum)