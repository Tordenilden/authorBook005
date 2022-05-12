import { HttpHeaders, HttpClient } from '@angular/common/http'; //1) og 4)
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //2)
import { IAuthor } from '../interfaces/IAuthor';


// 1)Benytte en class der hedder HttpClient(DI) - denne service giver os Http, features - HUSK module.ts
// 2)Async opsætning - hedder Observable
// 3)Definer en URL til mit API
// 4)HttpHeaders - hvilket format sender vi i? der er en del forskellige

// 4)
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
// this is our API !!
  baseUrl : string = 'https://localhost:44333/api/Authors';
  constructor(private http:HttpClient) { } //1) DI
  createAuthor(author:IAuthor):Observable<IAuthor>{
    return this.http.post<IAuthor>(this.baseUrl,author,httpOptions);
  }
  readAllAuthors():Observable<IAuthor[]>{
    //return this.http.get<hvis vi skriver data format Her, så transformeres de auto>
    return this.http.get<IAuthor[]>(this.baseUrl);
  }

  readAllAuthorsHC():IAuthor[]{
    return [
      {authorId:1,name:'bo'},
      {authorId:2,name:'ib'},
      {authorId:3,name:'Christian the Great'}
    ];
  }
  readAuthorByIdHC(authorId:number):IAuthor{
    //lav en liste og returner nummer 2
    let authorList:IAuthor[]=[
      {authorId:1,name:'bo'},
      {authorId:2,name:'ib'},
      {authorId:3,name:'Christian the Great'}
    ];
    return authorList[authorId];
  }
  readAuthorByName(){}
  readAuthorByBook(){}//this one is robin
  updateAuthor(){}
  deleteAuthor(){}

  hansOgGrethe():string{
    return "hansi har kage";
  }


}
