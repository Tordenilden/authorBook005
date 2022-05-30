import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { Author2Component } from './components/author2/author2.component';
import { Author3Component } from './components/author3/author3.component';
import { Side1Component } from './components/side1/side1.component';
import { Side2Component } from './components/side2/side2.component';
import { Side5Component } from './components/side5/side5.component';

// this is the area for endpoints / routes
const routes: Routes = [
  { path: 'side1', component: Side1Component }, // hvis jeg skriver side1 får jeg component
  { path: 'side2', component: Side2Component }, // hvis jeg skriver side1 får jeg component
  { path: 'kaffe', component: Side5Component }, // hvis jeg skriver side1 får jeg component
  { path: 'author', component: AuthorComponent },
  { path: 'author2', component: Author2Component },
  { path: 'author3', component: Author3Component },
];
//salkfdæjlksadjf
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
