import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { SigninComponent } from './AUTHENTICATION/signin/signin.component';
import { SignupComponent } from './AUTHENTICATION/signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { appRoutingModule } from './app-routing.module';
import { todoService } from './SERVICES AND MODELS/todo.service';
import { TodosComponent } from './todos/todos.component'




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    LandingpageComponent,
    TodosComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule,
    FormsModule
  ],
  providers: [
    todoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
