import { Page9Component } from './page9/page9.component';
import { Page10Component } from './page10/page10.component';
import { ProjectComponent } from './project/project.component';
import { Page2Component } from './page2/page2.component';
import { PpListComponent } from './pp-list/pp-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';


import { AuthService } from './auth.service';
import { TabComponent } from './tab/tab.component';
import { LoginComponent } from './login/login.component';
import { WelComponent } from './wel/wel.component';
import { hostViewClassName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page404Component } from './page404/page404.component';

import { TestComponent } from './test/test.component';
import { AuthGuardeService } from './auth-guarde.service';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { Page3Component } from './page3/page3.component';
import { Page8Component } from './page8/page8.component';
import { Page7Component } from './page7/page7.component';
import { Page6Component } from './page6/page6.component';
import { Page4Component } from './page4/page4.component';

const routes: Routes = [
  {path:'test', component:TestComponent},
  {path:'confirmation-dialog', component:ConfirmationDialogComponent},
  {path:'update-user/:id', component:UpdateUserComponent},
  {path:'login' ,component:LoginComponent},
  
   {path: 'tab' , component:TabComponent},
   {path:'add' , component:AddComponent},
  {path: 'page1'    ,component:Page1Component},

  {path:'pp-list', component:PpListComponent},
  {path:'page2', component:Page2Component},
  {path:'page3', component:Page3Component},
  {path:'home', component:HomeComponent},
  {path:'project',component:ProjectComponent},
  {path:'page10',component:Page10Component},
  {path:'page7', component:Page7Component},
  {path:'page8', component:Page8Component},
  {path:'page6',component:Page6Component},
 {path:'page9',component:Page9Component},
 {path:'page4', component:Page4Component},
  {path: 'wel'   ,canActivate:[AuthGuardeService] ,component:WelComponent},
  {path:'**' ,component:Page404Component}
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
