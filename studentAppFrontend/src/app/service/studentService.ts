import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import api from "../api";
import Student from "../models/student";

@Injectable({providedIn: 'root'})
export class StudentService {
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }
  addStudent(student:Student){
    this.http.post(api.addStudent, student.jsonify())
  }
  getAll(){
    this.http.get(api.getAll).subscribe(response => {
        console.log(response); 
    })
  }
}