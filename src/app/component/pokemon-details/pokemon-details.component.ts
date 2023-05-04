import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  @Input() pokemon: Card | undefined ;

}
