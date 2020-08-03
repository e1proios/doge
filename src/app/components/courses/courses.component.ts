
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Course } from './types/course';
import { CoursesService } from './services/courses.service';
import { CoursesQuery } from './store/courses.query';

@Component({
  selector: 'doge-courses-wow',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  $courses: Observable<Course[]>;
  fields: string[];

  constructor(
    private _coursesSvc: CoursesService,
    private _coursesQuery: CoursesQuery
  ) {}

  ngOnInit() {
    this._coursesSvc.getCourses();
    this.$courses = this._coursesQuery.selectAll();
    this.fields = ['id', 'name', 'description', 'active'];
  }
}
