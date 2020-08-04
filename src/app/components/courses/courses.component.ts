
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from './types/course';
import { CoursesService } from './services/courses.service';
import { CoursesQuery } from './store/courses.query';

@Component({
  selector: 'doge-courses-wow',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  fields: string[];

  constructor(
    private _coursesQuery: CoursesQuery,
    private _coursesSvc: CoursesService,
    private _router: Router
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
  openCourseEditor(courseId: number) {
    this._router.navigate(['/amaze', courseId]);
  }
  deleteCourse(courseId: number) {

  }
  switchCourseActivity(courseId: number) {

  }
}
