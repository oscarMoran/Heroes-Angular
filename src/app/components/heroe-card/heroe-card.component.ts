import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe : any = {};
  @Input() heroeId : number;
  @Output() SendHeroeId : EventEmitter<number>;

  constructor() {
    this.SendHeroeId = new EventEmitter();
   }

  ngOnInit() {
  }

  HeroeDetail(){
    this.SendHeroeId.emit(this.heroeId);
  }

}
