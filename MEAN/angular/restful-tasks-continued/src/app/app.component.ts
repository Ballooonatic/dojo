import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'RESTFUL TASKS CONTINUED';
  
  constructor (private _httpService: HttpService) {}
  
  ngOnInit(){
    this.getTasksFromService()
    console.log(this.tasks)
  }
  
  tasks: Object = []; // I had to specify object because TS had a hissy fit when i tried to set the data to it
  
  getTasksFromService(){
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
        // console.log("Got our tasks!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
        // This may be different for you, depending on how you set up your Task API.
        // this.tasks = data['tasks'];
        this.tasks = data
      });
  }
}

