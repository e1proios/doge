import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './components/courses/courses.component';
import { EditCourseWowComponent } from './components/courses/edit-course-wow.component';

const routes: Routes = [
  { path: 'wow', component: CoursesComponent },
  { path: 'amaze', component: EditCourseWowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
