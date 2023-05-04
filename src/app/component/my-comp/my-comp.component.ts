import { Card } from './../../models/Card';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss']
})
export class MyCompComponent {
  @Input() param!: Card[];
  @Input() isRow!: boolean;
  @Output() newItemEvent = new EventEmitter<number>();
  @Output() newItemEvent2 = new EventEmitter<Card>();
  @Output() newItemEvent3 = new EventEmitter<Card>();

  remove(value: number) {
    this.newItemEvent.emit(value);
  }
  update(pokemon: Card){
    this.newItemEvent2.emit(pokemon);
 }

 updateForm(pokemon: Card){
    this.newItemEvent3.emit(pokemon);
 }
}


