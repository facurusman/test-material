import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { EditComponent } from './components/edit/edit.component';
import { ErroresComponent } from './components/errores/errores.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponenteComponent } from './components/home-componente/home-componente.component';
import { MoviesComponent } from './components/moviesComp/movies.component';

const routes: Routes = [
  { path: '', component: HomeComponenteComponent },
  { path: 'peliculas', component: MoviesComponent },
  { path: 'historia', component: HistoryComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'descripcion/:id', component: DescripcionComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '**', component: ErroresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
