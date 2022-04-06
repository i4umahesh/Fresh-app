import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoginComponent } from './app-login.component';
import { LoginFormComponent } from './modules/components/login-form/login-form.component';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppLoginComponent,
    LoginFormComponent,
    NumberOnlyDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    // AppLoginComponent,
    LoginFormComponent
  ]
})
export class AppLoginModule { }
