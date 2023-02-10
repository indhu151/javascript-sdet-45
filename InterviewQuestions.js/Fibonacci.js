
var n=20
var first=0
var second=1
var temp=0;
for(let i=0;i<n;i++){
    console.log(`fibonacci series is ${first}`);
    temp=first+second
    first=second
    second=temp
}