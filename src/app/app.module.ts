import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { BezingerTestComponent } from './bezinger-test/bezinger-test.component';
import { BtModo2Component } from './bt-modo2/bt-modo2.component';
import { BtModo3Component } from './bt-modo3/bt-modo3.component';
import { BtModo4Component } from './bt-modo4/bt-modo4.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    AdminComponent,
    NavbarComponent,
    FooterComponent,
    BezingerTestComponent,
    BtModo2Component,
    BtModo3Component,
    BtModo4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
