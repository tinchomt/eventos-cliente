import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../../model/evento.model';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class EventoService {

  
  baseUrl:string = URL_SERVICIOS+"/eventos";

  baseUrlEvetoPorGrupo:string = URL_SERVICIOS+"/eventos"+"/porgrupo/";

  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get<Evento[]>(this.baseUrl);
  }

  getEventosPorIdGrupo(id_grupo:any){
    return this.http.get<Evento[]>(this.baseUrlEvetoPorGrupo+id_grupo);
  }
  crearEvento(evento:Evento){
    return this.http.post(this.baseUrl, evento);
  }

}
