import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {IHeroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html'
})
export class SearchresultComponent implements OnInit {
  
  public searchResultValues : IHeroe[] = [];

  constructor(
    private heroeService : HeroesService,
    private activatedRoute : ActivatedRoute, 
    private router:Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( 
      param => {
        this.searchResultValues = this.heroeService.SearchHeroe(param['termino']);
      });
  }
  HeroeDetail(id:number){
    this.router.navigate(['/heroe',id])
  }
}
