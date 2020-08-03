
import { Component, OnInit } from '@angular/core';

import { CoursesService } from './components/courses/services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private _coursesSvc: CoursesService,
  ) {}

  ngOnInit() {
    this._coursesSvc.getCourses();
  }
}
