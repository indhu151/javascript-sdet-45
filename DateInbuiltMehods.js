let date=new Date()

//get the date,year,month,day of week
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getFullYear())
// console.log(date.getMonth())

//get the hours,minutes,seconds
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getTime())
console.log(date.getMilliseconds())

//to convert date to string
console.log(date.toDateString())
today_Date=date.toDateString().split(" ")
month=console.log(today_Date[2])

console.log(date.toString())