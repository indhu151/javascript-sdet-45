let arr=[2,4,3,11,7,6,2]
for(let i=0;i<arr.length;i++)
{
    let num=arr[i]
    let j=2;
    while(j<num)
    {
        if(num%j==0)
        {
        break
        }
        else{
        j++
        }
    }
    if(j==num){
        console.log(num);
    }
}
    
 











// for(let i=0;i<arr.length;i++){
//     for(j=2;j<i;j++)
//     {
//         if(i%j==0){
//            console.log(`prime number is ${arr[i]}`); 
//         }
//     }
// }