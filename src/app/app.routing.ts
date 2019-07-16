import { Routes, RouterModule } from '@angular/router';
import {ColumnNavigatorComponent} from './column-navigator/column-navigator.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
const appRoutes: Routes = [

  { path: 'columns', component: ColumnNavigatorComponent },
  { path: 'courses', component: CourseGridComponent },
  { path: 'courses/:cid', component: CourseViewerComponent },
  { path: 'courses/:cid/modules/:mid', component: CourseViewerComponent },
  { path: 'courses/:cid/modules/:mid/lessons/:lid', component: CourseViewerComponent },
  { path: 'courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponent },
  { path: 'courses/:cid/modules/:mid/lessons/:lid/topics/:tid/widgets', component: CourseViewerComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
