import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../../model/usuarioLogin.model';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';

import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  loginUsr:string;

  constructor(public http:HttpClient,public router: Router) {
    console.log("Servicio Usuario Listo");
    this.cargarStorage();
   }

   estaLogueado(){
    return (this.loginUsr.length > 1) ? true : false;
   }

   cargarStorage(){

    if(localStorage.getItem('login')){
      this.loginUsr = localStorage.getItem('login');
    }else{
      this.loginUsr = '';
    }

   }

   logout(){

    this.loginUsr = '';
    localStorage.removeItem('id_usuario');
    localStorage.removeItem('id_grupo');
    localStorage.removeItem('login');
    localStorage.removeItem('evento');

    this.router.navigate(['/login']);
   }

  login(usuarioLogin:UsuarioLogin){

    let url=  URL_SERVICIOS+"/login";

    return this.http.post(url,usuarioLogin).pipe
            (map( (resp:any) => {

              localStorage.setItem('id_usuario', resp.id_usuario);
              localStorage.setItem('id_grupo', resp.id_grupo);
              localStorage.setItem('login', resp.login);

              this.loginUsr=resp.login;
              
              return true;
    }));
  }


}
