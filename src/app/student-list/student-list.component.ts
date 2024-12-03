import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  
  Students: Student[] = [{name:"Ron" , subject:"math"},{name:"Sara" , subject:"programming"},{name:"Rachel" , subject:"pysichology"}]
  DeleteFunc(student:Student){
  let indexToDelete = this.Students.indexOf(student)
  this.Students.splice(indexToDelete,1);
  }


}
