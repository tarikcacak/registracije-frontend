import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { VoziloModel } from "../models/vozilo.model";
import { Injectable } from "@angular/core";

@Injectable()
export class RegistracijeService {

    private baseUrl = "http://localhost:8080/registracija-vozila";

    constructor(
        private httpClient: HttpClient
    ) {}

    getAllVozila(): Observable<VoziloModel[]> {
        return this.httpClient.get<VoziloModel[]>(`$(this.baseUrl)/vozila`);
    }

}