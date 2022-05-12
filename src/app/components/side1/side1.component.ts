import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side1',
  templateUrl: './side1.component.html',
  styleUrls: ['./side1.component.css']
})
export class Side1Component implements OnInit {
          // EF - skal hedde id, ID, Id og/ eller classname+id
          // public int AuthorId { get; set; } // PK
          // public string name { get; set; }
          // public int age { get; set; }
          // public string password { get; set; }
          // public bool isAlive { get; set; }
         // public List<Book> Book { get; set; }
         authorId : number = 1; // typescript
         name : string="Bo";
         age : number=34;
         isAlive : boolean=true;
         // arrays efter fros´kost
         //let list: number[] = [1, 2, 3]; // noo iam a noob omg
         list: number[] = [1, 2, 3];
  constructor() { } // DI

  ngOnInit(): void { // svare lidt til en start metode
  }

myMethod(){
  console.log("myMethod");
  //let list: number[] = [1, 2, 3]; // jubii!!1
}
myMethod2(variabelnavn:string){
  console.log("myMethod" + variabelnavn);

}

}
