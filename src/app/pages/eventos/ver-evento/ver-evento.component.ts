import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from '../../../service/service.index';
import { Evento } from '../../../model/evento.model';

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.css']
})
export class VerEventoComponent implements OnInit {

  eventos:Evento[]=[];
  cargando:boolean=true;

  constructor(private router:Router, private eventoService:EventoService) {


   }

  ngOnInit() {

    this.eventoService.getEventos().subscribe(data => {

      console.log(data);
      this.eventos = data;
      this.cargando = false;

    });
  }


  seleccionarEvento(evento:Evento){

    console.log("selecccionarEvento: "+evento.descripcion);

    localStorage.removeItem("evento");
    // localStorage.removeItem("id_evento");
    // localStorage.removeItem("evento_nombre");

    // localStorage.setItem("id_evento", evento.id_evento.toString());
    // localStorage.setItem("evento_nombre", evento.descripcion);

    localStorage.setItem("evento", JSON.stringify(evento));
    
    this.router.navigate(['/listar-asistente']);
  }

}
