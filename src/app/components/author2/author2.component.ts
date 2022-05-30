import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-author2',
  templateUrl: './author2.component.html',
  styleUrls: ['./author2.component.css']
})
export class Author2Component implements OnInit {
  websiteList: any = ['Javatpoint.com', 'HDTuto.com', 'Tutorialandexample.com'] ;
  Books : any = [
    {bookId:1, title:'You are the best'},
    {bookId:2, title:'Best H3 ever'},
    {bookId:66, title:'H3 Rocks'},
  ];

  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
  authorForm  = new FormGroup({
    name : new FormControl('', Validators.required),
    book : new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
    //data
  }


  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  submitAuthor(){
    console.log(this.authorForm.value);

  }
}
