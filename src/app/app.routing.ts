import {RouterModule, Routes} from '@angular/router';
import {AddStudentComponent} from './components/students/add-student.component';
import {DisplayStudentComponent} from './components/students/display-student.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/add',
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddStudentComponent
  },
  {
    path: 'display',
    component: DisplayStudentComponent,
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
