import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <md-toolbar color="primary">Test</md-toolbar>
    <h1>{{title}}</h1>
    <button md-raised-button color="accent">Click</button>
    <br><hr>
<!--    
<a [routerLink]=" ['/'] ">Home</a>
<a [routerLink]=" ['/training'] ">Training</a>
<br><hr>
<router-outlet></router-outlet>
-->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cAos';
}
