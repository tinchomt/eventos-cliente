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

  registrarAcceso(registraAcceso:RegistraAcceso){
    return this.http.post(this.baseUrlRegistraAccesos, registraAcceso);
  }
}
