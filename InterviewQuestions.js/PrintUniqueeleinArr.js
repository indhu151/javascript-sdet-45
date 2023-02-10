let arr=[2,3,1,6,7,2,1]
var arr1=new Array(arr.length).fill(false)
for(let i=0;i<arr.length;i++)
{
    var count=1
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr1[i]==false)
        {
            if(arr[i]==arr[j]){
                arr1[j]=true
                count++
            }

        }
    }
    if(arr1[i]==false){
        console.log(arr[i]);
    }
}