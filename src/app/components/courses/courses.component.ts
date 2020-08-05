
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
    this._coursesQuery.selectAllOrdered().subscribe(courses => {
      this.courses = courses;
      if (courses.length) {
        this.fields = Object.keys(courses[0]);
      }
    });
  }
  openCourseEditor(courseId: number) {
    this._router.navigate(['/amaze', courseId]);
  }
  deleteCourse(courseId: number) {
    this._coursesSvc.deleteCourse(courseId);
  }
  switchCourseActivity(course: Course) {
    this._coursesSvc.updateCourse({
      ...course,
      active: !course.active
    });
  }
}
