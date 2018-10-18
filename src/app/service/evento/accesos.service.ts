import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accesos } from '../../model/accesos.model';
import { URL_SERVICIOS } from '../../config/config';
import { RegistraAcceso } from '../../model/registraAcceso.model';

@Injectable({
  providedIn: 'root'
})
export class AccesosService {

  baseUrlAccesos:string = URL_SERVICIOS+"/ver-accesos";

  baseUrlRegistraAccesos:string = URL_SERVICIOS+"/registrar-acceso";


  constructor(private http: HttpClient) { }

  getAccesos(){
    return this.http.get<Accesos[]>(this.baseUrlAccesos);
  }

  getAccesosPorGrupo(id_grupo:any){
    return this.http.get<Accesos[]>(this.baseUrlAccesos+"/"+id_grupo);
  }
  
  getAccesosPorGrupoyEvento(id_grupo:any,id_evento:any){
    return this.http.get<Accesos[]>(this.baseUrlAccesos+"/"+id_grupo+"/"+id_evento);
  }

  getAccesosPorGrupoyEventoyEstado(id_grupo:any,id_evento:any,id_estado:any){
    return this.http.get<Accesos[]>(this.baseUrlAccesos+"/"+id_grupo+"/"+id_evento+"/"+id_estado);
  }

  registrarAcceso(registraAcceso:RegistraAcceso){
    return this.http.post(this.baseUrlRegistraAccesos, registraAcceso);
  }
}
