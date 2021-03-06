import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import { AsistenteService } from '../../../service/service.index';
import { Asistente } from '../../../model/asistente.model';
import { Evento } from '../../../model/evento.model';

@Component({
  selector: 'app-listar-asistente',
  templateUrl: './listar-asistente.component.html',
  styleUrls: ['./listar-asistente.component.css']
})
export class ListarAsistenteComponent implements OnInit {

  asistentes:Asistente[];

  selectAsistente: Asistente;

  colsAsist: any[];

  evento:Evento;

  constructor(private router:Router, private asistenteService:AsistenteService) { }

  ngOnInit() {

    this.evento = JSON.parse(localStorage.getItem("evento"));

    if(!this.evento){
      alert("Debe Seleccionar un Evento");
      this.router.navigate(['/ver-evento']);
      return;
    }

    let id_grupo = localStorage.getItem('id_grupo');

    this.asistenteService.getAsistentesPorIdGrupo(id_grupo).subscribe(data => {
    
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

  editarAsistente(asist: Asistente){
    this.selectAsistente = asist;
    console.log("editarAsistente "+asist.dni);
    //this.messageService.add({severity:'info', summary:'Asistente Selected', detail:'DNI: ' + asist.dni});

    localStorage.removeItem("dniAsist");
    localStorage.setItem("dniAsist", asist.dni.toString());
    this.router.navigate(['editar-asistente']);

    console.log("editarAsistente 2"+asist.dni);
  }

  agregarAsistente(){

    this.router.navigate(['agregar-asistente']);

  }

  selectAsistenteVer(asist: Asistente) {
    this.selectAsistente = asist;
    //this.messageService.add({severity:'info', summary:'Asistente Selected', detail:'DNI: ' + asist.dni});

    console.log(asist.dni);
}


}
