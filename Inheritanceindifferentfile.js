class abc
{
   static a=10; 
}
class def extends abc
{
   b=5;
 show(){
    console.log(this.b)
 }

}
let data=new def()
module.exports=data