
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from './types/course';
import { CoursesService } from './services/courses.service';
import { CoursesQuery } from './store/courses.query';

@Component({
  selector: 'app-edit-course-wow',
  templateUrl: './edit-course-wow.component.html'
})
export class EditCourseWowComponent implements OnInit {
  private _providedCourse: Course;
  buttonLabel: string;
  editCourseForm;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    private _coursesSvc: CoursesService,
    private _query: CoursesQuery
  ) { }

  ngOnInit() {
    this.editCourseForm = this._fb.group({
      name: [''],
      description: ['']
    });

    this._route.params.subscribe(params => {
      this.buttonLabel = "ADD NEW";

      if (params.id) {
        this._query.selectEntity(params.id).subscribe(course => {
          if (course) {
            this._providedCourse = course;
            this.buttonLabel = "SAVE CHANGES";

            this.editCourseForm.patchValue({
              name: course.name,
              description: course.description
            });
          }
        });
      }
    });
  }
  saveCourse() {
    if (this._providedCourse) {
      this._coursesSvc.updateCourse({
        ...this._providedCourse,
        ...this.editCourseForm.value
      });
    } else {
      this._coursesSvc.addCourse(this.editCourseForm.value);
    }
    this._router.navigate(['/wow']);
  }
}
