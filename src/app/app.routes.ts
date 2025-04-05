import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudComponent } from './crud/crud.component';
import { CrudFormComponent } from './crud/crud/crud-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'crud', component: CrudComponent },
    { path: 'crud/add', component: CrudFormComponent },
    { path: 'crud/edit/:id', component: CrudFormComponent }
];
