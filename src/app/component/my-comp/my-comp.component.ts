import { Card } from './../../models/Card';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss']
})
export class MyCompComponent {
  @Input() param!: Card[];
  @Input() isRow!: boolean;
}


