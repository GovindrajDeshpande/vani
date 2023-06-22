import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { taskmodel } from '../model/regmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getstudent() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  addstudent(tasks:taskmodel){
    return this.http.post<taskmodel>("http://localhost:3000/posts",tasks)
  }
  getemployee(){
    return this.http.get<taskmodel[]>("http://localhost:3000/posts"); 
  }
}
