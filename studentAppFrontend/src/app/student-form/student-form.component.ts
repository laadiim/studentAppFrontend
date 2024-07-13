import { Component, Input } from '@angular/core';
import Student from '../models/student';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  logValues(name: any,address: any) {
    console.log(name.value, ':', address.value);
    name.value = "";
    address.value = "";
  }

  saveStudent(student: Student){
    
  }
}
