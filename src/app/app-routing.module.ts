import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CalendarManagementComponent } from './calendar-management/calendar-management.component';
import { WorkoutManagementComponent } from './workout-management/workout-management.component';
import { SymptomManagementComponent } from './symptom-management/symptom-management.component';
import { ReportManagementComponent } from './report-management/report-management.component';
import { AlertManagementComponent } from './alert-management/alert-management.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserManagementComponent },
  { path: 'calendar', component: CalendarManagementComponent },
  { path: 'workouts', component: WorkoutManagementComponent },
  { path: 'symptoms', component: SymptomManagementComponent },
  { path: 'reports', component: ReportManagementComponent },
  { path: 'alerts', component: AlertManagementComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
