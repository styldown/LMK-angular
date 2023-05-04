import { PokemonDetailsComponent } from './component/pokemon-details/pokemon-details.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MyCompComponent } from './component/my-comp/my-comp.component';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './component/formulaire/formulaire.component';



@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    PokemonDetailsComponent,
    FormulaireComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
