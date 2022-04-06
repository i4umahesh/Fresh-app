import { NgModule } from '@angular/core';
import { AppLoginComponent } from './app-login.component';
import { LoginFormComponent } from './modules/components/login-form/login-form.component';



@NgModule({
  declarations: [
    AppLoginComponent,
    LoginFormComponent
  ],
  imports: [
  ],
  exports: [
    AppLoginComponent,
    LoginFormComponent
  ]
})
export class AppLoginModule { }
