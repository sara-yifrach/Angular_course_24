import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-details-forms-td',
  templateUrl: './student-details-forms-td.component.html',
  styleUrls: ['./student-details-forms-td.component.scss']
})
export class StudentDetailsFormsTDComponent {
@Input()
student:Student|null=null;

@Output()
onSaveNewStudent:EventEmitter<Student> = new EventEmitter()



saveNewStudent(){
  if (this.student) 
    this.onSaveNewStudent.emit(this.student);
}

}
