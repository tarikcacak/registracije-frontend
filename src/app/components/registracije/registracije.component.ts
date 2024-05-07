import { Component } from '@angular/core';
import { RegistracijeService } from '../../shared/services/registracije.service';
import { VoziloModel } from '../../shared/models/vozilo.model';

@Component({
  selector: 'app-registracije',
  templateUrl: './registracije.component.html',
  styleUrl: './registracije.component.css'
})
export class RegistracijeComponent {
  vozila: VoziloModel[] = [];

    constructor(
        private registracijeSerivce: RegistracijeService
    ) {}

    ngOnInit() {
        this.getVozila();

    }

    getVozila() {
      this.registracijeSerivce.getAllVozila().subscribe((vozila) => {
        vozila.forEach((vozilo) => this.vozila.push(vozilo));
        console.log(vozila);
      });
    }

}
