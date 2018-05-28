ANGULAR


~~~~~~~~~~ Getting Started ~~~~~~~~~~

Note: The C.L.I. is not the only way to build an Angular app. You could build it by including only the necessary package.json files and config files. Also, the C.L.I. gives us a large version, full of libraries, we can easily remove libraries we are not going to use, so even though the initial app is full of resources, we can easily modify it to become a light weight framework.

ng help




Generating and serving an Angular project via a development server:

ng new app
cd app
ng serve

"app" will be the project name. you may say "ng serve app" to serve it up without having to cd up there


Served on localhost://4200 by default. The following command can help that if you like.

ng serve --host 0.0.0.0 --port 4201




Generating new Components, Directives, Pipes, Services

ng generate component myNewComponent

You can also use g for generate, and c for component

ng g directive|pipe|service|class|guard|interface|enum|module

ng g d|p|s|c|g|i|e|m




Serving Angular with Node/Express

Make sure the angular application is contained within the root folder of the express project, and cd into the agular app.

ng build --watch

This will create a "dist" folder by converting all the TS angular files into minified JavaScript and putting it there.
The '--watch' portion of the command launches an additional Node server which keeps watch over all of our Angular TypeScript files. 
If any TS files get modified, this server will automatically run 'ng build', so the distribution folder is always up to date.

Lastly, we need our Express project to define a static route to the newly created dist folder.

app.use(express.static( __dirname + '/my-angular-app/dist' ));








~~~~~~~~~~ Terminology ~~~~~~~~~~


Components:

These are basically portions of our webpage, built with html, css, and ts files.
Each should have what it needs to function independently.
Represented in Angulars' TS as a class.




Services:

This is where we store the data sent from the server. It is Angulars' Model
Any models' job is to serve data to the controller (typescript files)

When using the same service many times, rather than having the same one in many components, we save memory/space
by simply having a single instance, and "injecting" it to any component as needed on the fly.




Observables:

These enable services to make AJAX requests, and talk to the server for data.

"Observables are a way to manage asynchronous data. With Angular, an http response is an Observable. 
Observables deliver data over time, so we can be notified if the data ever changes."

While waiting for data to return, the app will continue executing any other tasks as needed.

An Observable will deliver its data to any part of the app that has subscribed to it by way of its' subscribe method
Inside the subscribe method, we'll also write what we would like to do with the data once we have it.

There are many other things we can do with Observables, but for now we will focus on this.








~~~~~~~~~~ Creating a New Service ~~~~~~~~~~


We'll set up our service by navigating to our Angular app in our terminal and running this line:

ng g s http

Here, we're naming our service 'http', but you may name it whatever you like. This gives us a file called http.service.ts.
Open this file and you'll see that we are exporting a class called HttpService, which means another file can import it!




Register the service:

To use our service, we'll need to register it with the app. Open app.module.ts and import HttpService. 
Provide the file path to your service file. Next, include HttpService in the array of providers.


.../app/app.module.ts

import { HttpService } from './http.service';
@NgModule({
//    ...
   providers: [HttpService],
//    ...
})




HttpClient:

We made our service so that it can fetch data from our database, but it can't do that unless it can make http requests!
Therefore, we'll need our project to import the HttpClientModule. Let's import it and include it in the array of imports.


.../app/app.module.ts

import { HttpClientModule } from '@angular/common/http';
@NgModule({
   ...
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   ...
})




Dependency Injection:

We use dependency injection when one part of our app depends on another.
For example, our service depends on HttpClient to make http requests!
The underscore is conventional.


.../app/http.service.ts

import { HttpClient } from '@angular/common/http';

export class HttpService {
    constructor(private _http: HttpClient){}
}


The other dependency injection we'll need is injecting the service into a component.
A service will not be used unless it is required by a component, so let's open our root component's .ts file.
Import the service and make it an attribute in the class.


.../app/app.component.ts

import { HttpService } from './http.service';
export class AppComponent {
   title = 'app';
   constructor(private _httpService: HttpService){}
}




Now we're all set up to start making http requests from the service! Let's begin by using the route in our Restful Task API assignment that fetches all tasks. Make a function called getTasks(). It will use the http module's .get() method to go to our route (in this example, that route is /tasks). Since Angular returns an Observable, let's store it in a variable and subscribe. For now, just have your service print the data that we get back.

.../app/http.service.ts

getTasks(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
 }
To invoke this function, let's call it in the constructor method of our service. This way, it will be the first thing our service will do.

.../app/http.service.ts

export class HttpService {
    constructor(private _http: HttpClient){
        this.getTasks();
    }
}
Run your project, open Inspect Element in your browser, and you should see your tasks being printed in the console!