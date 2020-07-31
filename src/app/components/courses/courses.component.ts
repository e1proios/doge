
import { Component, OnInit } from '@angular/core';

import { CoursesService } from './services/courses.service';

@Component({
  selector: 'doge-courses-wow',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(
    private _coursesSvc: CoursesService
  ) {}

  ngOnInit() {
    this._coursesSvc.getCourses();
  }
  muchWow() {
    console.log("MUCH WOW");
  }
}
