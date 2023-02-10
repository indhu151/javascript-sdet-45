var str="I am employye of TestYantra"
var str1=" "
for(let i=0;i<str.length;i++){
    str1=str.split(' ').map(function(word) { 
        return word.split('').reverse().join(''); 
    }).join(' ');
}
console.log(str1);
