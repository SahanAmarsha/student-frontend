import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  apiEndPoint  = 'http://localhost:3000/student';

  constructor(
    private http: HttpClient
  ) { }

  getStudents(): any{
    return this.http.get(this.apiEndPoint + '/display');
  }

  addStudent(newStudent: any): any {
    return this.http.post(this.apiEndPoint + '/add', newStudent);
  }

  updateStudent(updatedStudent: any): any {
    return this.http.put(this.apiEndPoint + '/add/' + updatedStudent._id, updatedStudent);
  }

  deleteStudent(studentId: any): any {
    return this.http.delete(this.apiEndPoint + '/tasks/' + studentId);
  }
}
