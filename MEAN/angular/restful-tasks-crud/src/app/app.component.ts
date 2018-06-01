import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  tasks: object = []; // I had to specify object because TS had a hissy fit when i tried to set the data to it
  newTask: any;
  
  constructor (private _httpService: HttpService) {}

  ngOnInit() {
    this.getTasksFromService()
    this.newTask = { title: "", description: "" }
  }
  
  getTasksFromService(){
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
        this.tasks = data
        for (let i in this.tasks) {
          this.tasks[i].isEdit = false
        }
      });
  }

  addNewTask() {
    let observable = this._httpService.addTask(this.newTask)
    observable.subscribe(data => {
      this.newTask = { title: "", description: "" }
      this.getTasksFromService()
    })
  }

  toggleEdit(task) {
    task.isEdit = !task.isEdit;
  }

  editTask(id) {
    let observable = this._httpService.updateTask(id, this.newTask)
    observable.subscribe(data => {
      this.newTask = { title: "", description: "" }      
      this.getTasksFromService()
    })
  }

  deleteTask(id) {
    let observable = this._httpService.removeTask(id)
    observable.subscribe(data => {
      this.getTasksFromService()      
    })
  }

}

