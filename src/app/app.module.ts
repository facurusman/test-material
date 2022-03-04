import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

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
    DescripcionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
