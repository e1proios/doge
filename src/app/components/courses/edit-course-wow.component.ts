
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-edit-course-wow',
  templateUrl: './edit-course-wow.component.html'
})
export class EditCourseWowComponent implements OnInit {
  editCourseForm;

  constructor(
    private _fb: FormBuilder,
    private _coursesSvc: CoursesService
  ) { }

  ngOnInit() {
    this.editCourseForm = this._fb.group({
      name: [''],
      description: ['']
    });
  }

  add() {
    this._coursesSvc.addCourse({
      name: "how to not be gay",
      description: "simply stop doing sodomy"
    });
  }
  onSubmit() {
    console.warn(this.editCourseForm.value);
  }
}
