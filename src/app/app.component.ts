import { Component } from '@angular/core';
// import { StudentListComponent } from "./student-list/student-list.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // imports: [StudentListComponent],
})
export class AppComponent {
  title = 'my-app';
  x:number = 7;
  
}
