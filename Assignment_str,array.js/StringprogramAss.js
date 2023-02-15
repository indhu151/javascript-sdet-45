 let str="good morning"
 let str1=" "
//split the string with 'o'
// words=str.split('o')
// console.log(words); //[ 'g', '', 'd m', 'rning' ]

//to change the vowels into uppercase

for(let i=0;i<str.length;i++)
	{
        ch=str.charAt(i)
	    if(ch>='a' && ch<='z')
		{
			if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
                str1=str1+ch.toUpperCase()
					
			else
				str1=str1+ch
		}
    }
    console.log(str1);






