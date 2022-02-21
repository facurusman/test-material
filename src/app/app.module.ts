import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

import { MatInputModule } from '@angular/material/input';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'




import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './components/moviesComp/movies.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistoryComponent } from './components/history/history.component';
import { ErroresComponent } from './components/errores/errores.component';
import { HomeComponenteComponent } from './components/home-componente/home-componente.component';
import { MoviesService } from './services/movies.service';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { ReviewsService } from './services/reviews.service';
import { DetailsService } from './services/details.service';
import { SimilarService } from './services/similar.service';


const appRoutes:Routes=[

  {path:'',component:HomeComponenteComponent},
  {path:'peliculas', component:MoviesComponent},
  {path:'historia', component:HistoryComponent},
  {path:'contacto', component:ContactComponent},
  {path:'descripcion/:id', component:DescripcionComponent},
  {path:'**', component: ErroresComponent}


]




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    ContactComponent,
    FooterComponent,
    HistoryComponent,
    ErroresComponent,
    HomeComponenteComponent,
    DescripcionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    [RouterModule.forRoot(appRoutes)],

  ],
  exports: [RouterModule],

  providers: [MoviesService, ReviewsService, DetailsService, SimilarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
