class student
{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("student name is "+this.name);
    }
}
let a=new student("sharath");
a.display();