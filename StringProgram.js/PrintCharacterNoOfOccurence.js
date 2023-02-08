var str="testyantra"
for (let i=0;i<=str.length;i++) 
{
   var count=0
   var ch=str.charAt(i)
   for(let j=0;j<str.length;j++)
   {
    if(str[i]==str[j])
    {
        if(j<i)
        {
            break;
        }
        count++;
    }
}
if(count>=1)
{
    console.log(str[i]+"--->"+count)
}
    
}