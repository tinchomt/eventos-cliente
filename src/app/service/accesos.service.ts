import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accesos } from '../model/accesos.model';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AccesosService {

  baseUrlAccesos:string = URL_SERVICIOS+"/ver-accesos";


  constructor(private http: HttpClient) { }

  getAccesos(){
    return this.http.get<Accesos[]>(this.baseUrlAccesos);
  }

}
