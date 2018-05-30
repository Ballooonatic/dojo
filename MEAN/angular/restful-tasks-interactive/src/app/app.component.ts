import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'RESTFUL TASKS Interactive!';
  
  constructor (private _httpService: HttpService) {}
  
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

  onButtonClickEvent(event: any): void { 
      console.log(`Click event is working with event: `, event);
  }
}

