import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Card } from 'src/app/models/Card';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent {
  @Input() pokemon!: Card ;
  HP=  new FormControl();
  attack=  new FormControl();
  defense=  new FormControl();
  special_attack=  new FormControl();
  special_defense=  new FormControl();
  speed=  new FormControl();
  
  update(){ 
    this.pokemon.stats.attack= this.attack.value;
    this.pokemon.stats.HP= this.HP.value;
    this.pokemon.stats.defense= this.defense.value;
    this.pokemon.stats.special_attack= this.special_attack.value;
    this.pokemon.stats.special_defense= this.special_defense.value;
    this.pokemon.stats.speed= this.speed.value;
  }
}
