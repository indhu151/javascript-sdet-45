function accountdetails(){
    console.log("all the account details")
}
function Activecustomer(){
    console.log("all the active customer")
}
function personaldetails(){
    console.log("all the personal details")
}
function operation(data){
    data();
}
//operation(accountdetails())
operation(accountdetails)
operation(Activecustomer)
