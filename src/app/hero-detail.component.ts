/**
 * Created by Pratik Dhumal on 25-05-2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  //language=Angular2HTML
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>`
})

export class HeroDetailComponent implements OnInit{
  @Input()hero:Hero;
  ngOnInit():void{
  }
  constructor(){
  }




}
