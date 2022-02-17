import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';




import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistoryComponent } from './components/history/history.component';
import { ErroresComponent } from './components/errores/errores.component';
import { HomeComponenteComponent } from './components/home-componente/home-componente.component';


const appRoutes:Routes=[

  {path:'',component:HomeComponenteComponent},
  {path:'productos', component:ProductsComponent},
  {path:'historia', component:HistoryComponent},
  {path:'contacto', component:ContactComponent},
  {path:'**', component: ErroresComponent}


]




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ContactComponent,
    FooterComponent,
    HistoryComponent,
    ErroresComponent,
    HomeComponenteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    [RouterModule.forRoot(appRoutes)],

  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
