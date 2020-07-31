import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CoursesService } from './components/courses/services/courses.service';
import { CoursesStore } from './components/courses/store/courses.store';
import { CoursesQuery } from './components/courses/store/courses.query';

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    CoursesStore,
    CoursesQuery
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
