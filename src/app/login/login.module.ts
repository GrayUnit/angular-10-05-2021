import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';



@NgModule({
  declarations: [
    PageLoginComponent,
    LoginFormComponent,
    FormRegisterComponent,
    PageRegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    PageLoginComponent
  ]
})
export class LoginModule { }
