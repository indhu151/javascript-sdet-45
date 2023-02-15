let str="good morning welcome to javascript"
// var words=str.split(" ").map((v)=>{
//     if('aeiouAEIOU'.includes(v.charAt(2))&&v.length>2)
//     {
//         return v.split('')[0].toUpperCase()+v.slice(1)
//     }
//     else{
//         return v
//     }
// })
// console.log(words.join(' '));

//another method
let words=str.split(" ")
const vowels=['a','e','i','o','u']
let a=""
for(let i=0;i<words.length;i++)
{
    let word=words[i]
    if(vowels.includes(word[2]))
    {
        var firstchar=word[0].toUpperCase()
        words[i]=firstchar+word.substring(1)
    }
    a=words.join(' ')
}
console.log(a);













 

    



