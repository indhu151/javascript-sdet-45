var AccountDetails={
    first_name:"Ria",
    Last_name:"sharma",
    Acc_no:103425111123,
    skillset:['java','js','selenium'],
    details: function(){
        return "details of customer"
    },
    Acc_Summary:Accdetails={
        IFSC_code:1011,
    },
}
console.log(AccountDetails)//to print an object
console.log(AccountDetails.first_name)//to print value of particular property
console.log(AccountDetails.Last_name)//to print value of particular property
console.log(AccountDetails.Acc_no)//to print value of particular property
console.log(AccountDetails.skillset)//to print an array 
console.log(AccountDetails.details())//to print a function inside object
console.log(AccountDetails.Acc_Summary.IFSC_code)//to print object inside another