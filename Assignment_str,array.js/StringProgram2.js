let str="javascript"
let arr=[]
for(let i=0;i<str.length;i++)
	{
        ch=str.charAt(i)
	    if(ch>='a' && ch<='z')
		{
			if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
            {
                arr.push(ch)
            }    
					
			else
            {

            }
				
		}
    }
    console.log(arr);