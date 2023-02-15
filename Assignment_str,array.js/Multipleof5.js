function multiples(input)
{
    if(input%5==0 && input%10==0)
    {
        console.log(`multiples of 5 & 10 is ${input}`);
    }
    else if(input%5==0)
    {
        console.log(`multiples of 5 is ${input}`);
    }
    else if(input%10==0)
    {
        console.log(`multiples of 10 is ${input}`);
    }
    else{
        console.log(`${input} is not a multiple of 5 & 10`);
    }
}
multiples(75)