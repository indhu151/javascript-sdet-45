counti=0
countE=0;
countR=0;
var input=[{fame:"abc",address:"India"},
{fame:"def",address:"Europe"},
{fame:"rst",address:"India"},
{fame:"xyz",address:"Europe"},
{fame:"mno",address:"Russia"},]
//console.log(typeof(input));

for(let i=0;i<input.length;i++)
{
    console.log(input[i].address)
    if(input[i].address=="India")
    {
        counti++
    }
    else if(input[i].address=="Europe")
    {
        countE++
    }
    else if(input[i].address=="Russia")
    {
        countR++
    }
    
}
console.log(`India count --->  ${counti}`);
console.log(`Europe count --->  ${countE}`);
console.log(`Russia count --->  ${countR}`);

