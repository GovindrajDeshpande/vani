import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { BooksComponent } from './books/books.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'books',component:BooksComponent},
  {path:'students',component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
