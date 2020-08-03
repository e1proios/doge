import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _router: Router
  ) {}

  muchWow() {
    console.log("MUCH WOW");
    this._router.navigate(['/wow']);
  }
}
