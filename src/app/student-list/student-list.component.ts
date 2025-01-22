// import { Component } from '@angular/core';
// import { Student } from '../student.model';
// import { TitleStrategy } from '@angular/router';

// @Component({
//   selector: 'app-student-list',
//   templateUrl: './student-list.component.html',
//   styleUrls: ['./student-list.component.scss']
// })
// export class StudentListComponent {

//   Students: Student[] = [{ name: "Ron", subject: "math", average: 99 }, { name: "Sara", subject: "programming", average: 55 }, { name: "Rachel", subject: "pysichology", average: 88 }]
//   DeleteFunc(student: Student) {
//     let indexToDelete = this.Students.indexOf(student)
//     this.Students.splice(indexToDelete, 1);
//   };

//   selectedStudent: Student | null = null;

//   ShowDetails(studentToShow: Student) {
//     this.selectedStudent = studentToShow
//   }
//   ShowNewStudentDetails() {
//     this.selectedStudent = new Student("new student")
//   }
//   addNewStudent(studentToAdd: Student) {

//     this.Students.push(studentToAdd);
//     this.selectedStudent = null;
//   }

// }
import { Component } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {

  Students!: Student[];
  // = this._studentService.getStudentSlowly();

  selectedStudent: Student | null = null;

  DeleteFunc(student: Student) {
    let indexToDelete = this.Students.indexOf(student);
    this.Students.splice(indexToDelete, 1);
  }

  ShowDetails(studentToShow: Student) {
    this.selectedStudent = studentToShow;
  }

  ShowNewStudentDetails() {
    this.selectedStudent = new Student('new student');
  }

  addNewStudent(studentToAdd: Student) {
    this.Students.push(studentToAdd);
    this.selectedStudent = null;  // מאפס את הסטודנט שנבחר
  }
  /**
   *
   */
  constructor(private _studentService: StudentService) {
    _studentService.getStudentSlowly().then(StudentList=>{
      this.Students = StudentList;
    })
    //super();
    
  }

}
