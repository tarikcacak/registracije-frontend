import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistracijeComponent } from './components/registracije/registracije.component';
import { RegistracijeService } from './shared/services/registracije.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistracijaComponent } from './components/registracije/registracija/registracija.component';
import { UrediComponent } from './components/uredi/uredi.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistracijeComponent,
    RegistracijaComponent,
    UrediComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RegistracijeService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
