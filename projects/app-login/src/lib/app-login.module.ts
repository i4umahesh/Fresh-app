import { NgModule } from '@angular/core';
import { AppLoginComponent } from './app-login.component';
import { AppLoginFormComponent } from './modules/components/app-login-form/app-login-form.component';



@NgModule({
  declarations: [
    AppLoginComponent,
    AppLoginFormComponent
  ],
  imports: [
  ],
  exports: [
    AppLoginComponent
  ]
})
export class AppLoginModule { }
