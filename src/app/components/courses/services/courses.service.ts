
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../types/course';

@Injectable()
export class CoursesService {

  constructor(
    private _http: HttpClient
  ) {}

  getCourses() {
    this._http.get('/api/courses').subscribe(
      (response: Course[]) => {
        console.log(response.length + ' courses received');
      }
    );
  }
}
