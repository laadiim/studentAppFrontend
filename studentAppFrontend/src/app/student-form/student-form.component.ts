import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  firstname: string;
  constructor(){
    this.firstname = "b";
  }
}
