
import { Injectable } from '@angular/core';

import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { Course } from '../types/course';

export interface CoursesState extends EntityState<Course> {}

@Injectable()
@StoreConfig({
  name: 'courses'
})
export class CoursesStore extends EntityStore<CoursesState> {
  private _idCounter: number;

  constructor() {
    super();
  }

  initializeStore(data: Course[]) {
    this._idCounter = data.reduce((acc, nxt) => {
      return acc > nxt.id ? acc : nxt.id;
    }, 0);
    this.add(data);
  }
  get counter() {
    return ++this._idCounter;
  }
}
