// import { Component, OnInit } from '@angular/core';
// import {  EventEmitter, Input, Output } from '@angular/core';
// import { Student } from '../student.model';
// import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';



// @Component({
//   selector: 'app-student-details-form-md',
//   templateUrl: './student-details-form-md.component.html',
//   styleUrls: ['./student-details-form-md.component.scss']
// })
// export class StudentDetailsFormMDComponent{

//  private _student:Student|null=null;

//   // public get student() :Student|null{
//   //   return this._student;
//   // }


// @Input()
// // public set student(value:Student){ 
// //   this._student = value;
// //   this.studentForm = new FormGroup(
// //     {
// //       "name": new FormControl("",[Validators.required, Validators.minLength(3)]),
// //       "description":new FormControl("",Validators.required)
// //     }
// //   );
// //   // if (this.studentForm.value !== null) {
// //   //   this._student = this.studentForm.value;
// //   // } else {
// //   //   // טיפול במקרה של null, למשל להגדיר ערך ברירת מחדל
// //   //   this._student = { name: '',average: 0, subject:""}; // דוגמה לאובייקט ברירת מחדל
// //   // }
// // }
// // //student:Student|null=null;
// public set student(value: Student | null) {
//   this._student = value;
//   // אם student לא null, אתחיל את הטופס מחדש
//   if (value) {
//     this.studentForm.patchValue(value);  // מעדכן את ערכי הטופס בערכים של הסטודנט
//   } else {
//     this.studentForm.reset();  // אם student הוא null, מאפס את הטופס
//   }
// }

// public get student(): Student | null {
//   return this._student;
// }


// @Output()
// onSaveStudent:EventEmitter<Student> = new EventEmitter()
// // studentForm:FormGroup|null=null;

// studentForm: FormGroup = new FormGroup({
//   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
//   description: new FormControl('', [Validators.required]),
// });

// saveNewStudent(){
//   if (this.student) {
//     // if(this.studentForm)
//     // this.student = this.studentForm.value!;
//     this.onSaveStudent.emit(this.student);
//   }
// }

// }
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APP_USERS, User } from '../models/user.model';

@Component({
  selector: 'app-student-details-form-md',
  templateUrl: './student-details-form-md.component.html',
  styleUrls: ['./student-details-form-md.component.scss']
})
export class StudentDetailsFormMDComponent {

  usersList:User[]=APP_USERS;

  private _student: Student | null = null;

  @Input()
  public set student(value: Student | null) {
    this._student = value;
    if (value) {
      this.studentForm.patchValue(value);  // מעדכן את ערכי הטופס אם יש ערכים בסטודנט
    } else {
      this.studentForm.reset();  // אם לא קיים סטודנט, מאפס את הטופס
    }
  }

  public get student(): Student | null {
    return this._student;
  }

  @Output() onSaveStudent: EventEmitter<Student> = new EventEmitter();

  studentForm: FormGroup = new FormGroup({
    name: new FormControl(this.student?.name, [Validators.required, Validators.minLength(3)]),
    description: new FormControl(this.student?.subject, [Validators.required]),
    userId:new FormControl(this.student?.userId,[Validators.required]),
    priority:new FormControl(this.student?.StudentPriority,[Validators.required])
  });

  saveNewStudent() {
    if (this.studentForm.valid) {
      if (this._student) {
        // עדכון הסטודנט עם הערכים החדשים מהטופס
        const updatedStudent = { ...this._student, ...this.studentForm.value };
        this.onSaveStudent.emit(updatedStudent);  // שולח את הסטודנט המעדכן לאמא
      }
    }
  }

}
