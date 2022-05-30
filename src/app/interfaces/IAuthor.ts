export interface IAuthor{
  authorId:number;
  name:string;
  age:number;
  password:string;
  isAlive:boolean;
}
//export kan benytte min definition i en anden fil
// når vi henter fra API kan det drille
//os hvis vores properties ikke er nulstillet
//men lad os nu se
