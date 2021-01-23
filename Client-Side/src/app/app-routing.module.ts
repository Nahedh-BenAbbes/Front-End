import { NgModule } from '@angular/core';
import { ClientLoginComponent } from './components/client-login/client-login.component';
import { RouterLink, RouterModule,RouterOutlet,Routes } from '@angular/router';
import { ClientRegisterComponent } from './components/client-register/client-register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'login', component: ClientLoginComponent },
  { path: 'register', component: ClientRegisterComponent },
  {path: 'home', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ClientLoginComponent,ClientRegisterComponent]
