import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IHeroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe : IHeroe;
  constructor(
      private activatedRoute : ActivatedRoute, 
      private heroeService : HeroesService) { 

    this.activatedRoute.params.subscribe( param =>{ 
      this.heroe = heroeService.getHeroe(param['id']);
    });
  }
}
