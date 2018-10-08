import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asistente } from '../model/asistente.model';
import { URL_SERVICIOS } from '../config/config';

@Injectable()
export class AsistenteService {

  // baseUrl:string = "http://localhost:8080/eventos-app/api/asistentes";

  baseUrl:string = URL_SERVICIOS+"/asistentes";


  constructor(private http: HttpClient) { }

  getAsistentes(){
    return this.http.get<Asistente[]>(this.baseUrl);
  }

  getAsistentePorDni(dni:number){

    return this.http.get<Asistente>(this.baseUrl + '/' + dni);

  }

  crearAsistente(asistente:Asistente){
    return this.http.post(this.baseUrl, asistente);
  }

  actualizarAsistente(asistente:Asistente){
    return this.http.put(this.baseUrl + '/' + asistente.dni, asistente);
  }

  borrarAsistente(dni:number){
    return this.http.delete(this.baseUrl + '/' + dni);

  }
}
