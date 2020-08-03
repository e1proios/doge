
import { Component, OnInit } from '@angular/core';

import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-edit-course-wow',
  templateUrl: './edit-course-wow.component.html'
})
export class EditCourseWowComponent implements OnInit {

  constructor(
    private _coursesSvc: CoursesService
  ) { }

  ngOnInit() {
  }

  add() {
    this._coursesSvc.addCourse({
      name: "how to not be gay",
      description: "simply stop doing sodomy"
    });
  }
}
