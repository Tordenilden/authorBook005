import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/interfaces/IAuthor';
import { AuthorService } from 'src/app/services/author.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title = 'My title'; // typeløst
  title2 : string = 'my title2';
  authorList :IAuthor[]=[]; // what?? mit array har fået en værdi / array
  author : IAuthor;

  constructor(private authorService:AuthorService) { // DI
    this.author={authorId:1,name:'bo'};
    this.author={authorId:2,name:'ib akka skalle'};

    this.authorList = [
      {authorId:1,name:'bo'},
      {authorId:2,name:'ib'},
      {authorId:3,name:'Christian the Great'}
    ];
    console.log(this.authorList);



  }

  ngOnInit(): void {
//     //vi vil gerne kunne simulere et API - dvs kalde en metode!!
//     console.log(
//      this.authorService.hansOgGrethe());
// // hente værdi til liste fra vores service
// //this.authorList = ??
//       console.log(this.authorService.readAllAuthorsHC());
//       console.log(this.authorService.readAuthorByIdHC(1));
// //Invoke readAuthorById(2);
    this.authorService.readAllAuthors().subscribe((data)=>console.log(data));


  }
  // simulere en knap!!
  readAuthorById(authorId:number){
    console.log(this.authorService.readAuthorByIdHC(authorId));
  }
  //1)

}
