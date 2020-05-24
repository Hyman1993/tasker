import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from '../core/header/header.component';
import {FooterComponent} from '../core/footer/footer.component';
import {SidebarComponent} from '../core/sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
