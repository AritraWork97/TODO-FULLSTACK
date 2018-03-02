import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router' ;

import { LandingpageComponent } from './landingpage/landingpage.component';
import { SigninComponent } from './AUTHENTICATION/signin/signin.component';
import { SignupComponent } from './AUTHENTICATION/signup/signup.component';
import { TodosComponent } from './todos/todos.component';



const appRoutes : Routes = [
    {path: '', redirectTo : '/home', pathMatch : 'full'},
    {path : 'home', component: LandingpageComponent, pathMatch: 'full'},
    {path : 'signup', component : SignupComponent, pathMatch : 'full'},
    {path : 'signin', component : SigninComponent, pathMatch : 'full'},
    {path : 'todo', component : TodosComponent, pathMatch : 'full'}
]; 

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class appRoutingModule {

}