import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import { AsistenteService } from '../../service/asistente.service';
import { Asistente } from '../../model/asistente.model';

@Component({
  selector: 'app-listar-asistente',
  templateUrl: './listar-asistente.component.html',
  styleUrls: ['./listar-asistente.component.css']
})
export class ListarAsistenteComponent implements OnInit {

  asistentes:Asistente[];

  selectAsistente: Asistente;

  colsAsist: any[];

  constructor(private router:Router, private asistenteService:AsistenteService) { }

  ngOnInit() {

    this.asistenteService.getAsistentes().subscribe(data => {
    
      console.log(data);
      this.asistentes = data;

      this.colsAsist = [
        { field: 'dni', header: 'Dni' },
        { field: 'apellido', header: 'Apellido' },
        { field: 'nombre', header: 'Nombre' },
        { field: 'email', header: 'Email' }
    ];
      
    })
    
  }


  borrarAsistente(){}

  editarAsistente(){}

  agregarAsistente(){

    this.router.navigate(['agregar-asistente']);

  }

  selectAsistenteVer(asist: Asistente) {
    this.selectAsistente = asist;
    //this.messageService.add({severity:'info', summary:'Asistente Selected', detail:'DNI: ' + asist.dni});

    console.log(asist.dni);
}

}
