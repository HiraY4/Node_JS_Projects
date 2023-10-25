#!/usr/bin/env node

class School {
  name: string;
  students: Student[] = [];
  teacher: Teacher[] = [];

  addStudent(Sobject:Student){
      this.students.push(Sobject)
  }
  addTeacher(Tobject:Teacher){
      this.teacher.push(Tobject)
  }
  constructor(name:string){
      this.name = name;
  }
};

class Student {
  name: string;
  age: number;
  schoolName: string

  constructor(name:string, age:number, schoolName:string){
      this.name=name,
      this.age=age,
      this.schoolName=schoolName
  }
};

class Teacher extends Student {
  email:string="";
  contact: string="";
  addDetails(email:string,contact:string){
      this.email=email;
      this.contact=contact;
  }
};

let schoolAlpha = new School("Alpha")
let schoolBeta = new School("Beta")

let stud1 = new Student("Sarah",15, schoolAlpha.name)
let stud2 = new Student("Fatima",15, schoolAlpha.name)
let stud3 = new Student("Wasay",13, schoolBeta.name)

let Teach1 = new Teacher("Farzana",43, schoolBeta.name)
let Teach2 = new Teacher("Khurram",51, schoolBeta.name)
let Teach3 = new Teacher("Warda",33, schoolBeta.name)



schoolAlpha.addStudent(stud1);
schoolAlpha.addStudent(stud2);
schoolBeta.addStudent(stud3);

schoolAlpha.addTeacher(Teach1);
schoolAlpha.addTeacher(Teach2);
schoolBeta.addTeacher(Teach3);

Teach1.addDetails("abc@mail.com","92#######")
Teach2.addDetails("xyz@mail.com","92#######")
Teach3.addDetails("efg@mail.com","92#######")

console.log(schoolAlpha);
console.log(schoolBeta);
