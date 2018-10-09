import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  AsistenteService,
  AccesosService,
  EventoService,
  UsuarioService,
  LoginGuardGuard

} from './service.index'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AsistenteService,
    AccesosService,
    EventoService,
    UsuarioService,
    LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
