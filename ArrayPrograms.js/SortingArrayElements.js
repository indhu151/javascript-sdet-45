var arr=[1,2,5,4,1,4,4]
for (let i = 0; i < arr.length; i++)
 {
    for(let j=i+1;j<arr.length;j++)
    {
        let temp=0;
        if(arr[i]>arr[j])
        {
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    console.log("Sorted Elements is"+arr[i])
    console.log("Maximum element is"+arr[0])
    console.log("Minimum element is"+arr[arr.length-1])
    
}