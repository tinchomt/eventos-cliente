import { NgModule } from "@angular/core";
import { VerEventoComponent } from "./eventos/ver-evento/ver-evento.component";
import { VerAccesosComponent } from "./ver-accesos/ver-accesos.component";
import { ListarAsistenteComponent } from "./asistentes/listar-asistente/listar-asistente.component";
import { EditarAsistenteComponent } from "./asistentes/editar-asistente/editar-asistente.component";
import { AgregarAsistenteComponent } from "./asistentes/agregar-asistente/agregar-asistente.component";
import { PagesComponent } from "./pages.component";

import {ReactiveFormsModule} from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import{SharedModule} from '../shared/shared.module';
import { PAGES_ROUTES } from "./pages.routes";
import { AgregarEventoComponent } from './eventos/agregar-evento/agregar-evento.component';


@NgModule({
    declarations: [
        PagesComponent,
        AgregarAsistenteComponent,
        EditarAsistenteComponent,
        ListarAsistenteComponent,
        VerAccesosComponent,
        VerEventoComponent,
        AgregarEventoComponent
        
    ],
    exports: [
        PagesComponent,
        AgregarAsistenteComponent,
        EditarAsistenteComponent,
        ListarAsistenteComponent,
        VerAccesosComponent,
        VerEventoComponent
       
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        ButtonModule,
        PanelModule,
        TableModule,
        SharedModule,
        PAGES_ROUTES
       
    ]
})
export class PagesModule { }