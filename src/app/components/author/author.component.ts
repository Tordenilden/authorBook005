import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IAuthor } from 'src/app/interfaces/IAuthor';
import { AuthorService } from 'src/app/services/author.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  // VARIABLER TIL HTML MM
  //title: any = 'My title'; // typeløst
  //title2 : string = 'my title2';
  authorList :IAuthor[]=[]; // what?? mit array har fået en værdi / array
  author : IAuthor;
  // valg:boolean=false;

  //HTML FORMS
  authorForm  = new FormGroup({
    authorId : new FormControl(''),
    name : new FormControl(''),
    age : new FormControl(''),
    password : new FormControl(''),
    isAlive : new FormControl(''),
    book : new FormControl(''),
  });
  constructor(private authorService:AuthorService) { // DI
    this.author={authorId:1,name:'bo', age:12,password:'1234',isAlive:true};
    // this.author={authorId:1,name:'bo'};
    // this.author={authorId:2,name:'ib akka skalle'};
    // this.authorList = [
    //   {authorId:1,name:'bo'},
    //   {authorId:2,name:'ib'},
    //   {authorId:3,name:'Christian the Great'}
    // ];
    // console.log(this.authorList);
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
    //this.authorService.readAllAuthors().subscribe((data)=>console.log(data));
    this.authorService.readAllAuthors().subscribe(
      (data)=>{console.log(data)
      this.authorList = data
      }
      );
   // hvad så nu??
   // hvordan får vi data i vores authorList??
   // try it

  }
  // simulere en knap!!
  readAuthorById(authorId:number){
    //console.log("byId");
    //console.log(this.authorService.readAuthorByIdHC(authorId));
  }
  createAuthorHardCoded(){
    //HC et object...
    console.log("test");
    let author: IAuthor={authorId:0,name:'bo', age:12,password:'1234',isAlive:true};
    this.authorService.createAuthor(author).subscribe();
  }
  createAuthor(author:IAuthor){
    author.authorId=0; // Hvis jeg vil lave datatyper om...
    this.authorService.createAuthor(author).subscribe(data=>{
      console.log(data);
      this.authorList.push(data);
    })
  }

deleteAuthorHardcodedExample(authorId:number){
let list = [
  {authorId:1,name:'bo'},
  {authorId:2,name:'ib'},
  {authorId:3,name:'Christian the Great'}
];
let temp =list.filter((obj)=>obj.name!='bo');
console.log(temp);
}
deleteAuthor(authorId:number){
  this.authorService.deleteAuthor(authorId).subscribe((data)=>{
    //if() skal der noget if() ind her??
    this.authorList.filter((removeAuthor=>removeAuthor.authorId!=authorId));
  })
}

onToggle(temp:any){
  // herinde skal vi så sætte den til det modsatte end det den var dvs !
  //this.valg=!this.valg;
  console.log(temp.target.checked);
  //this.authorForm.checkbox.checked
}
searchSomething(authorName:any){
console.log(authorName);
//kalde min getByName eller getById eller hvad jeg nu har
}

}
  //service subsribe()!!
 // this.authorList.splice // position....
 // this.authorList.findIndex // hvilket objekt på hvilken position
 // this.authorList.filter // denne returnere en liste uden det objekt vi vil fjerne
  // i skal benytte et lambda exp...
  // jeg vil gerne have alt data tilbage pånær id eller noget i den retning...

//1)kalde mit api og jeg kan se den bliver slettet - MEN ui bliver ikk updated
//2)authorList og så fjerne det jeg har slettet!!
