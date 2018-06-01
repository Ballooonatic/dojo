import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor ( private _http: HttpClient ) {}

  getTasks(){
    return this._http.get('/tasks');
  }

  addTask(newTask) {
    return this._http.post('/tasks', newTask)
  }

  updateTask(task_id, newTask) {
    return this._http.put('/tasks/' + task_id, newTask)
  }

  removeTask(task_id) {
    return this._http.delete('/tasks/' + task_id, task_id)
  }

}