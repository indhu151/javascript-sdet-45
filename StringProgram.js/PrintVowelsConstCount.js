var str="testyantra"

var vc=0;
var cc=0;
for(let i=0;i<str.length;i++)
	{
        ch=str.charAt(i)
	    if(ch>='a' && ch<='z')
		{
			if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
					vc++;
			else
					cc++;
		}
		else if(ch>='A' || ch<='Z')
		{
			if(ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U')
					vc++;
			else
					cc++;
		}
		}
		console.log("Vowels="+vc);
		console.log("constants="+cc);