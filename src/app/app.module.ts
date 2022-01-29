import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {PasswordModule} from 'primeng/password';
import { ChipModule } from 'primeng/chip';

import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import {SelectButtonModule} from 'primeng/selectbutton';


import { IconsModule } from 'angular-bootstrap-md';


import {ButtonModule} from 'primeng/button';
import { Page404Component } from './page404/page404.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { WelComponent } from './wel/wel.component';
import { LoginComponent } from './login/login.component';


import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { TabComponent } from './tab/tab.component';
import {RouterModule} from '@angular/router';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

import {ScrollPanelModule} from 'primeng/scrollpanel';
import {MatDialogModule} from '@angular/material/dialog';

import {MegaMenuModule} from 'primeng/megamenu';

import {TieredMenuModule} from 'primeng/tieredmenu';
import {MenuModule} from 'primeng/menu';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AddComponent } from './add/add.component';
import { PpListComponent } from './pp-list/pp-list.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';
import { Page3Component } from './page3/page3.component';
import { ProjectComponent } from './project/project.component';
import { Page10Component } from './page10/page10.component';
import { Page9Component } from './page9/page9.component';
import { Page8Component } from './page8/page8.component';
import { Page7Component } from './page7/page7.component';
import { Page6Component } from './page6/page6.component';
import { Page4Component } from './page4/page4.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,

    Page404Component,

    Page1Component,
    WelComponent,
    LoginComponent,
    TabComponent,
    UpdateUserComponent,
    ConfirmationDialogComponent,
    AddComponent,
    PpListComponent,
    Page2Component,
    HomeComponent,
    Page3Component,
    ProjectComponent,
    Page10Component,
    Page9Component,
    Page8Component,
    Page7Component,
    Page6Component,
    Page4Component,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ChipModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatButtonModule,
    MatTooltipModule,
    TabViewModule,
    MatDialogModule,
    PasswordModule,
    MatBadgeModule,
    MegaMenuModule,
    DialogModule,
    SelectButtonModule,
      ButtonModule,
      TableModule,
      MenuModule,
      TieredMenuModule,
      RouterModule,
      CalendarModule,
      InputTextModule,
      IconsModule,
      CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
