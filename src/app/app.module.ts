 import { BrowserModule } from '@angular/platform-browser';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import {ReactiveFormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";
import { AsistenteService } from './service/asistente/asistente.service';
// import { ButtonModule } from 'primeng/button';
// import {PanelModule} from 'primeng/panel';
// import { TableModule } from 'primeng/table';
import { EventoService } from './service/evento/evento.service';
import { PagesModule } from './pages/pages.module';
import { UsuarioService } from './service/usuario/usuario.service';

//Servicios
import { ServiceModule } from './service/service.module';



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
    ServiceModule
    // ButtonModule,
    // PanelModule,
    // TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
