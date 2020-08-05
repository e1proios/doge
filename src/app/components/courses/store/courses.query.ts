
import { Injectable } from '@angular/core';

import { QueryEntity } from '@datorama/akita';
import { tap } from 'rxjs/operators';

import { Course } from '../types/course';
import { CoursesState, CoursesStore } from './courses.store';

@Injectable()
export class CoursesQuery extends QueryEntity<CoursesState> {
  constructor(protected store: CoursesStore) {
    super(store);
  }
  selectAllOrdered() {
    return this.selectAll().pipe(
      tap(data => data.sort(( first: Course, second: Course ) => {
        return first.id - second.id;
      }))
    );
  }
}
