import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiaryentryComponent } from './diaryentry/diaryentry.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"diaryentry",component:DiaryentryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
