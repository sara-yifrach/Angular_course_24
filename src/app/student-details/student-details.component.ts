import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
 export class StudentDetailsComponent {
  
@Input()
student:Student|null=null;

@Output()
onSaveNewStudent:EventEmitter<Student> = new EventEmitter()

saveNewStudent(){
  if (this.student) 
    this.onSaveNewStudent.emit(this.student);
}

}
