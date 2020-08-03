
import { Component, OnInit } from '@angular/core';

import { Course } from './types/course';
import { CoursesQuery } from './store/courses.query';

@Component({
  selector: 'doge-courses-wow',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  fields: string[];

  constructor(
    private _coursesQuery: CoursesQuery
  ) {}

  ngOnInit() {
    this.courses = [];
    this._coursesQuery.selectAll().subscribe(courses => {
      if (courses && courses.length) {
        this.fields = Object.keys(courses[0]);
        this.courses = courses;
      }
    });
  }
}
