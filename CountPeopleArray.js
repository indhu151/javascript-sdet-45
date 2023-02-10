counti=0
var input=[{fame:"abc",address:"India"},
{fame:"def",address:"Europe"},
{fame:"rst",address:"India"},
{fame:"xyz",address:"Europe"},
{fame:"mno",address:"Russia"},]
//console.log(typeof(input));

for(let i=0;i<input.length;i++)
{
    //console.log(input[i].address)
    if(input[i].address=="India")
    {
        counti++
    }
} 
console.log("People living in India is "+counti);