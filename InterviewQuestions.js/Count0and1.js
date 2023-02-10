var arr=[0,1,0,0,1,1,1]
var countz=0
var countone=0
for(let i=0;i<arr.length;i++){

    if(arr[i]==0){
        countz++
    }
    else if(arr[i]==1){
        countone++
    }
    else{

    }
}
console.log(countz);
console.log(countone);