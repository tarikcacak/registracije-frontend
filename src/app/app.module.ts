import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistracijeComponent } from './components/registracije/registracije.component';
import { RegistracijeService } from './shared/services/registracije.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistracijeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RegistracijeService,
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
