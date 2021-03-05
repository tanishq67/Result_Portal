import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  student: any;

  toggle: boolean = false;

  showResult($event: any) {
    this.toggle = true;
    this.student = $event;
  }

}
