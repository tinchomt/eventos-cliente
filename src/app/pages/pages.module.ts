import { NgModule } from "@angular/core";
import { VerEventoComponent } from "./eventos/ver-evento/ver-evento.component";
import { VerAccesosComponent } from "./ver-accesos/ver-accesos.component";
import { ListarAsistenteComponent } from "./listar-asistente/listar-asistente.component";
import { EditarAsistenteComponent } from "./editar-asistente/editar-asistente.component";
import { AgregarAsistenteComponent } from "./agregar-asistente/agregar-asistente.component";
import { PagesComponent } from "./pages.component";

import {ReactiveFormsModule} from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import{SharedModule} from '../shared/shared.module';
import { PAGES_ROUTES } from "./pages.routes";


@NgModule({
    declarations: [
        PagesComponent,
        AgregarAsistenteComponent,
        EditarAsistenteComponent,
        ListarAsistenteComponent,
        VerAccesosComponent,
        VerEventoComponent
        
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