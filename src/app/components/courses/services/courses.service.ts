
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Course } from '../types/course';
import { CoursesStore } from '../store/courses.store';

@Injectable()
export class CoursesService {
  private _idCounter;

  constructor(
    private _http: HttpClient,
    private _coursesStore: CoursesStore
  ) {}

  getCourses() {
    this._http.get('/api/courses').subscribe(
      (response: Course[]) => {
        this._coursesStore.add(response);
        this._idCounter = response[response.length - 1].id;
      }
    );
  }
  updateCourse(course: Course) {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');

    this._http.put('/api/courses/' + course.id, course, { headers: headers }).subscribe(
      data => {
        console.log('post success ' + JSON.stringify(data));
        this._coursesStore.update(course.id, course);
      },
      err => {
        console.log(err);
      }
    );
  }
  addCourse({ name, description}: Partial<Course>) {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');

    ++this._idCounter;
    const newCourse = {
      id: this._idCounter,
      active: true,
      name,
      description
    };

    this._http.post('/api/courses', newCourse, { headers: headers}).subscribe(
      data => {
        console.log('post success ' + JSON.stringify(data));
        this._coursesStore.add(newCourse);
      },
      err => {
        console.log(err);
      }
    );
  }
}
