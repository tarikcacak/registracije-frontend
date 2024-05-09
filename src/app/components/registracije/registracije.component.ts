import { Component } from '@angular/core';
import { RegistracijeService } from '../../shared/services/registracije.service';
import { VoziloModel } from '../../shared/models/vozilo.model';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-registracije',
  templateUrl: './registracije.component.html',
  styleUrl: './registracije.component.css'
})
export class RegistracijeComponent {
  vozila: VoziloModel[] = [];

    constructor(
        private registracijeService: RegistracijeService,
        private router: Router
    ) {}

    ngOnInit() {
      this.getVozila();
      if (this.vozila.length == 0)
        location.reload();
    }

    onRegistracijaClicked(voziloId: number) {
      this.router.navigate(['/uredi', voziloId])
    }

    getVozila() {
      this.registracijeService.getAllVozila().subscribe((vozila) => {
        this.vozila = vozila
        console.log(vozila);
      });
    }

}
