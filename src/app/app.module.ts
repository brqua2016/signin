import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';



import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LeaveComponent } from './leave/leave.component';
import { SettingsComponent } from './settings/settings.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { VisitorComponent } from './visitor/visitor.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  {path: 'welcome', component: WelcomeComponent},
  {path: 'visitor', component: VisitorComponent},
  {path: 'leave', component: LeaveComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'emergency', component: EmergencyComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LeaveComponent,
    SettingsComponent,
    EmergencyComponent,
    VisitorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
