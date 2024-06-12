import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';
import { incomeComponent } from './income.component';
import { summaryComponent } from './summary.component';

export const routes: Routes = [
    { path: 'income', component: incomeComponent },
    { path: 'summary', component: summaryComponent },
    { path: '', redirectTo: '',pathMatch: 'full' }
];
