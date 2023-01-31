var AccName=["Pooja","Priya",'Rashmi','Rahul']

//for in loop
for (const index in AccName) 
{
    console.log(index+" "+AccName[index])
    console.log(index+" "+AccName)
}


//forof loop
for (const i of AccName) {
    console.log(i+" "+AccName[i])
    console.log(i+"  "+AccName)
}

//forEach loop
AccName.forEach(index => {
    console.log(index+" "+AccName[index])
    //console.log(index+"  "+AccName)
});



