import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Card } from './models/Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Toto';
  details: Card |undefined
  ;
  toUpdate!: Card;
  urlApi = 'https://pokebuildapi.fr/api/v1/pokemon/limit/100';
  observable = this.http.get<Card[]>(this.urlApi);
  cardListRow! :Card[];
    // URL de l'API
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    if(!this.cardListRow){
    this.observable.subscribe(res=> this.cardListRow= res);
    }
  }
  
removeItem(id:number){
  this.details= undefined;
  this.cardListRow = this.cardListRow.filter(item=>item.id !== id)
}
updateDetails(pok: Card){
  this.details= pok;
}
updateForm(pok: Card){
  this.toUpdate= pok;
}
updatecardListRow(pok: Card){
  this.cardListRow.forEach((res)=>{if(res.id == pok.id){res=pok;}} );
}
}
