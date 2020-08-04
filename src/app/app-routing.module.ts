import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './components/courses/courses.component';
import { EditCourseWowComponent } from './components/courses/edit-course-wow.component';
import { DogeShibeComponent } from './components/doge-shibe/doge-shibe.component';

const routes: Routes = [
  { path: '', component: DogeShibeComponent},
  { path: 'doge', component: DogeShibeComponent},
  { path: 'wow', component: CoursesComponent },
  { path: 'amaze', component: EditCourseWowComponent },
  { path: 'amaze/:id', component: EditCourseWowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
