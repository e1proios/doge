
import { Injectable } from '@angular/core';

import { EntityState, EntityStore } from '@datorama/akita';

import { Course } from '../types/course';

export interface CoursesState extends EntityState<Course> {}

@Injectable()
export class CoursesStore extends EntityStore<CoursesState, Course> {
  constructor() {
    super();
  }
}
