let arr=[2,3,6,9,5,1]
let Earr=[]
let Oarr=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
       // console.log(`Even Number is ${arr[i]}`);
        Earr.push(arr[i])
    }
    else{
        // console.log(`Odd Number is ${arr[i]}`);
        Oarr.push(arr[i])
    }
}
console.log(Earr); //[2,6]
console.log(Oarr); //[3,9,5,1]