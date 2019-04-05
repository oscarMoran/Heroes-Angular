import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroesService{

    private heroes : IHeroe [] = [];
    constructor(private http : HttpClient) {
      this.GetHeroesFromFireBase()
    }

    public GetHeroesFromFireBase(){
      return new Promise( (resolve, reject ) =>{
        this.http.get('https://angular-html-75781.firebaseio.com/heroes.json').subscribe(
          (response : IHeroe[]) =>{ 
            this.heroes = response;
            resolve();
          }
        );
      }); 
    }

    public getHeroes(){
        return this.heroes;
    };

    public getHeroe(id : number) :  IHeroe{
      return this.heroes.filter(element => {return element.id  == id})[0];
    }

    public SearchHeroe(searchText:string) : IHeroe[]{
      let restult : IHeroe[] = [];
      for(let h of this.heroes){
        if(h.nombre.toLowerCase().indexOf(searchText.toLowerCase()) != -1){
          restult.push(h);
        }
      }
      return restult;
    }
}
export interface IHeroe {
    id : number;
    nombre : string;
    bio : string;
    img : string;
    aparicion : string;
    casa : string;
}