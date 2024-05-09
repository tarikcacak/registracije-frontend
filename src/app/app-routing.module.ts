import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistracijeComponent } from './components/registracije/registracije.component';
import { UrediComponent } from './components/uredi/uredi.component';

const routes: Routes = [
  { path: '', component: RegistracijeComponent},
  { path: 'uredi/:voziloId', component: UrediComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
