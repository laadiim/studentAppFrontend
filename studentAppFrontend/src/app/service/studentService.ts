import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import api from "../api";
import Student from "../models/student";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class StudentService {
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }
  addStudent(student:Student): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(api.addStudent, student, { headers, responseType: 'text' });
  }
  getAll(){
    this.http.get(api.getAll).subscribe(response => {
        console.log(response); 
    })
  }
}

export default StudentService;