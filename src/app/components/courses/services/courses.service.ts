
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../types/course';
import { CoursesStore } from '../store/courses.store';

@Injectable()
export class CoursesService {

  constructor(
    private _http: HttpClient,
    private _coursesStore: CoursesStore
  ) {}

  getCourses() {
    this._http.get('/api/courses').subscribe(
      (response: Course[]) => {
        this._coursesStore.add(response);
      }
    );
  }
}
