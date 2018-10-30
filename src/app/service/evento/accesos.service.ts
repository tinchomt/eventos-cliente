import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accesos } from '../../model/accesos.model';
import { URL_SERVICIOS } from '../../config/config';
import { RegistraAcceso } from '../../model/registraAcceso.model';
import { Evento } from 'src/app/model/evento.model';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccesosService {

  baseUrlAccesos:string = URL_SERVICIOS+"/ver-accesos";

  baseUrlRegistraAccesos:string = URL_SERVICIOS+"/registrar-acceso";
  listaAccesosCantidad:Accesos[]= [];


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

  buscarCantidadAsistentesPendientes(id_grupo:any,id_evento:any,id_estado:any){

//     return this.http.get<Accesos[]>(this.baseUrlAccesos+"/"+id_grupo+"/"+id_evento+"/"+id_estado);

return this.http.get<Accesos[]>(this.baseUrlAccesos+"/"+id_grupo+"/"+id_evento+"/"+id_estado)
.pipe(map(res => res));



    //  .subscribe(data => {
    
    //   console.log(data);
    //   this.listaAccesosCantidad = data;
    //   console.log("Service Ingresados: "+this.listaAccesosCantidad.length);
      
    // });
    // console.log("Service Ingresados 2: "+this.listaAccesosCantidad.length);
    // return this.listaAccesosCantidad.length;
  }

  // buscarCantidadAsistentesIngresados(id_grupo:any,id_estado:any ){

  //   return this.accesosService.getAccesosPorGrupoyEventoyEstado(id_grupo,this.evento.id_evento, id_estado);

  // }
}
