import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { ColumnNavigatorComponent } from './column-navigator/column-navigator.component';
import CourseService from './services/CourseService';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import ModuleService from './services/ModuleService';
import LessonService from './services/LessonService';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import TopicService from './services/TopicService';
import { WidgetListComponent } from './widget-list/widget-list.component';
import WidgetService from './services/WidgetService';
import { CourseGridComponent } from './course-grid/course-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnNavigatorComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    CourseGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseService,
    ModuleService,
    LessonService,
    TopicService,
    WidgetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
