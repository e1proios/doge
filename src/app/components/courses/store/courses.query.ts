
import { Injectable } from '@angular/core';

import { QueryEntity } from '@datorama/akita';

import { Course } from '../types/course';
import { CoursesState, CoursesStore } from './courses.store';

@Injectable()
export class CoursesQuery extends QueryEntity<CoursesState, Course> {
  constructor(protected store: CoursesStore) {
    super(store);
  }
  selectAllOrdered() {
  }
}
