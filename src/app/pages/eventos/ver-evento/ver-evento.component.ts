import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from '../../../service/evento.service';
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

}
