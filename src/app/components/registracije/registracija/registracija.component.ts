import { Component, Input, OnInit } from '@angular/core';
import { VoziloModel } from '../../../shared/models/vozilo.model';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrl: './registracija.component.css'
})
export class RegistracijaComponent implements OnInit {
  @Input() vozilo!: VoziloModel;

  ngOnInit(): void {
    
  }
}
