import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CalendarManagementComponent } from './calendar-management/calendar-management.component';
import { WorkoutManagementComponent } from './workout-management/workout-management.component';
import { SymptomManagementComponent } from './symptom-management/symptom-management.component';
import { ReportManagementComponent } from './report-management/report-management.component';
import { AlertManagementComponent } from './alert-management/alert-management.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    CalendarManagementComponent,
    WorkoutManagementComponent,
    SymptomManagementComponent,
    ReportManagementComponent,
    AlertManagementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
