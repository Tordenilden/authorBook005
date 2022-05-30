import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Side1Component } from './components/side1/side1.component';
import { Side2Component } from './components/side2/side2.component';
import { Side5Component } from './components/side5/side5.component';
import { AuthorComponent } from './components/author/author.component';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './components/book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Author2Component } from './components/author2/author2.component';
import { Author3Component } from './components/author3/author3.component';

@NgModule({
  declarations: [
    AppComponent,
    Side1Component,
    Side2Component,
    Side5Component,
    AuthorComponent,
    BookComponent,
    Author2Component,
    Author3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
