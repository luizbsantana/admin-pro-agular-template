import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { PaymentTypeFormComponent } from './payment-type/payment-type-form/payment-type-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'payment-types', component: PaymentTypeComponent },
    { path: 'payment-types/add', component: PaymentTypeFormComponent },
    { path: 'payment-types/edit/:id', component: PaymentTypeFormComponent }
];
