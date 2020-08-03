
import { Injectable } from '@angular/core';

import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { Course } from '../types/course';

export interface CoursesState extends EntityState<Course> {}

@Injectable()
@StoreConfig({
  name: 'courses'
})
export class CoursesStore extends EntityStore<CoursesState, Course> {
  constructor() {
    super();
  }
}
