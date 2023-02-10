var arr=[1,3,2,4,6,5,9]
var sum=0
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        sum=sum+arr[i]
    }
}
console.log(sum);