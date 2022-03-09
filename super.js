class student{
   display(){
       console.log("Student Name");
   }

}
class student1 extends student{
    display(){
        console.log("student rollno");
        super.display();
    }
}
let a=new student1();
a.display();