import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home';
import {AuthGuard} from './_guards';
import {LoginComponent} from './login';

const routes: Routes = [

{
  path: '',
    component: HomeComponent,
  canActivate: [AuthGuard]
},
{
  path: 'login',
    component: LoginComponent
},

// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

//export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
