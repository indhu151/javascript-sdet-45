var str="I am employye of TestYantra"
var str1=" "
// for(let i=0;i<str.length;i++){
//     str1=str.split(' ').map(function(word) { 
//         return word.split('').reverse().join(''); 
//     }).join(' ');
// }
// console.log(str1);
function input(abc){
words=abc.split(" ")
rewords=words.map(word=>
word.split("").reverse().join(""))
result=rewords.join(" ")
console.log(result);
}
input(str)