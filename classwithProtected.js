class Account{
    _name="Rahul"
    
    get details(){
        return this._name
    }
}
Accdetails=new Account()
Accdetails._name="divya"
console.log(Accdetails._name)