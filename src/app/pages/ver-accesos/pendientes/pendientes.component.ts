import { Component, OnInit } from '@angular/core';

import { Accesos } from '../../../model/accesos.model';
import { AccesosService } from '../../../service/service.index';
import { Router } from '@angular/router';
import { Evento } from 'src/app/model/evento.model';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styles: [
    `
        .old-car {
            background-color: #f8b142 !important;
            color: #ffffff !important;
        }

        .very-old-car {
            background-color: #2CA8B1 !important;
            color: #ffffff !important;
        }
    `
  ]
})
export class PendientesComponent implements OnInit {

  listaAccesos:Accesos[];
  colsAccesos:any[];

  evento:Evento;

  constructor(private router:Router, private accesosService:AccesosService) { }


  ngOnInit() {
    this.evento = JSON.parse(localStorage.getItem("evento"));

    if(!this.evento){
      alert("Debe Seleccionar un Evento");
      this.router.navigate(['/ver-evento']);
      return;
    }

    let id_grupo = localStorage.getItem('id_grupo');
    let id_estado =  1;

    this.accesosService.getAccesosPorGrupoyEventoyEstado(id_grupo,this.evento.id_evento, id_estado).subscribe(data => {
    
      console.log(data);
      this.listaAccesos = data;

      this.colsAccesos = [
        { field: 'dni', header: 'Dni' },
        { field: 'apellido', header: 'Apellido' },
        { field: 'nombre', header: 'Nombre' },
        { field: 'usuario', header: 'Usuario' },
        { field: 'estado', header: 'Estado' },
        { field: 'fechaCreado', header: 'Fecha' },
        { field: 'descripcion', header: 'Descripción' },
    ];
      
    })
  }


}
