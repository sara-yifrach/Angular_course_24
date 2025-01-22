import { Injectable } from "@angular/core";
import { Student } from "./student.model";

const STUDENTS=[
    { name: "Ron ", subject: "math", average: 99 },
    { name: "Sara ", subject: "programming", average: 55 },
    { name: "Rachel ", subject: "pysichology", average: 88 }
  ]
@Injectable()
export class StudentService{
    getStudents():Student[]{
        return STUDENTS;
    }
    getStudentSlowly():Promise<Student[]>{
         return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(STUDENTS);

            },5000)
            // reject("an error accured!")
         })
    }

    // callFunc(){
    //     var x : number;
    //     this.getValue();
    //     console.log("after call func");
        


    // }
}