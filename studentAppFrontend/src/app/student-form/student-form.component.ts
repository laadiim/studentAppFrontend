import { Component, Input } from '@angular/core';
import Student from '../models/student';
import StudentService from '../service/studentService';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  constructor(public studentService: StudentService){}

  logValues(name: any,address: any) {
    console.log(name.value, ':', address.value);
    this.saveStudent(new Student(name.value, address.value));
    name.value = "";
    address.value = "";
  }

  saveStudent(student: Student){
    this.studentService.addStudent(student).subscribe((response: any) => {console.log(response)});
  }
}
