 import { BrowserModule } from '@angular/platform-browser';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import {ReactiveFormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";
import { AuthenticationService } from './service/auth.service';
import { AsistenteService } from './service/asistente.service';
// import { ButtonModule } from 'primeng/button';
// import {PanelModule} from 'primeng/panel';
// import { TableModule } from 'primeng/table';
import { EventoService } from './service/evento.service';
import { PagesModule } from './pages/pages.module';
import { UsuarioLogin } from './model/usuarioLogin.model';
import { UsuarioService } from './service/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
     BrowserModule,
     BrowserAnimationsModule,
    PagesModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    // ButtonModule,
    // PanelModule,
    // TableModule
  ],
  providers: [AuthenticationService, AsistenteService, EventoService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
