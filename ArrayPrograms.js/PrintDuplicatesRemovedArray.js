var arr= [1,2,5,4,1,4,4];
const arr1= new Array(arr.length).fill(false);	
    for(let i=0;i<arr.length;i++)
		{
			var count=1;
			for(let j=i+1;j<arr.length;j++)
			{
				if(arr1[i]==false)
				{
					if(arr[i]==arr[j]) {
						arr1[j]=true;
						count++;
					}
				}
			}
			if(arr1[i]==false)
			{
                
				console.log(arr[i]);
            }
            
		}
       
	