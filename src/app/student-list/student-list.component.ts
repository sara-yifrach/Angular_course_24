import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  Students: Student[] = [{id:1 , subject:"math"},{id:2 , subject:"programming"},{id:3 , subject:"pysichology"}]
}
