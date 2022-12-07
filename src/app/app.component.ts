import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'pedrao';
  userData = {
    email: 'pedraodaxj@gmail.com',
    role: 'entregador de pizza',
  };
  title = 'curso-angular';
}
