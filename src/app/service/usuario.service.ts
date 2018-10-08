import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/usuarioLogin.model';
import { URL_SERVICIOS } from '../config/config';
import { Router } from '@angular/router';

import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http:HttpClient,public router: Router) {
    console.log("Servicio Usuario Listo");
   }

  login(usuarioLogin:UsuarioLogin){

    let url=  URL_SERVICIOS+"/login";

    return this.http.post(url,usuarioLogin).pipe
            (map( (resp:any) => {

              localStorage.setItem('id_usuario', resp.id_usuario);
              localStorage.setItem('id_grupo', resp.id_grupo);
              localStorage.setItem('login', resp.login);
              
              return true;
    }));
  }


}
