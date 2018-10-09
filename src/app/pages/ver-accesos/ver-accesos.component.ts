import { Component, OnInit } from '@angular/core';
import { Accesos } from '../../model/accesos.model';
import { AccesosService } from '../../service/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-accesos',
  templateUrl: './ver-accesos.component.html',
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
export class VerAccesosComponent implements OnInit {

  listaAccesos:Accesos[];
  colsAccesos:any[];

  constructor(private router:Router, private accesosService:AccesosService) { }

  ngOnInit() {

    this.accesosService.getAccesos().subscribe(data => {
    
      console.log(data);
      this.listaAccesos = data;

      this.colsAccesos = [
        { field: 'dni', header: 'Dni' },
        { field: 'apellido', header: 'Apellido' },
        { field: 'nombre', header: 'Nombre' },
        { field: 'evento', header: 'Evento' },
        { field: 'usuario', header: 'Usuario' },
        { field: 'estado', header: 'Estado' },
        { field: 'fechaCreado', header: 'Fecha' },
        { field: 'descripcion', header: 'Descripción' },
    ];
      
    })
  }

}
