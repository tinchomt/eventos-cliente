import { Component, OnInit } from '@angular/core';
import { AccesosService } from 'src/app/service/service.index';
import { Accesos } from 'src/app/model/accesos.model';
import { Evento } from 'src/app/model/evento.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-asistentes-evento',
  templateUrl: './asistentes-evento.component.html',
  styleUrls: ['./asistentes-evento.component.css']
})
export class AsistentesEventoComponent implements OnInit {

  listaAccesosPendientes:Accesos[]= [];
  listaAccesosIngresados:Accesos[]= [];

  cantPend:any;
  cantIngr:any;

  evento:Evento;

   id_estadoPendiente =  1;
   id_estadoIngresado =  2;
   id_grupo:any;

  // Doughnut
  public doughnutChartLabels:string[] = ['Invitados', 'Ingresados'];
  public doughnutChartData:number[] = [0,0];
  public doughnutChartType:string = 'doughnut';
 
  
  constructor(private router:Router, private accesosService:AccesosService) {
    console.log("Constructor");
   
   }

  ngOnInit() {
    console.log("ngOnInit");

    this.evento = JSON.parse(localStorage.getItem("evento"));

    if(!this.evento){
      alert("Debe Seleccionar un Evento");
      this.router.navigate(['/ver-evento']);
      return;
    }

     this.id_grupo = localStorage.getItem('id_grupo');
    // let id_estadoPendiente =  1;
    // let id_estadoIngresado =  2;

   this.buscarCantidadAsistentesPendientes(this.id_grupo,this.id_estadoPendiente);
   this.buscarCantidadAsistentesIngresados(this.id_grupo,this.id_estadoIngresado);
     
      
    console.log("Pendientes Cant: "+this.cantPend);
    console.log("Ingresados Cant: "+ this.cantIngr);
   
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  buscarCantidadAsistentesPendientes(id_grupo:any,id_estado:any ){

    this.accesosService.buscarCantidadAsistentesPendientes(id_grupo,this.evento.id_evento, id_estado).subscribe(data => {
    
      console.log(data);
      this.listaAccesosIngresados = data;
      console.log("Ingresados: "+this.listaAccesosIngresados.length);
      this.cantPend=this.listaAccesosIngresados.length;
     this.doughnutChartData= [this.cantPend,this.cantIngr];
   });

  }

  buscarCantidadAsistentesIngresados(id_grupo:any,id_estado:any ){

    this.accesosService.buscarCantidadAsistentesPendientes(id_grupo,this.evento.id_evento, id_estado).subscribe(data => {
    
      console.log(data);
      this.listaAccesosPendientes = data;
      console.log("Pendientes: "+this.listaAccesosPendientes.length);
      this.cantIngr=this.listaAccesosPendientes.length;
      this.doughnutChartData= [this.cantPend,this.cantIngr];
   });
  
  }

  actualizarGrafico(){
    console.log("actualizarGrafico "+this.cantPend);
    this.buscarCantidadAsistentesPendientes(this.id_grupo,this.id_estadoPendiente);
    this.buscarCantidadAsistentesIngresados(this.id_grupo,this.id_estadoIngresado);

    this.doughnutChartData= [this.cantPend,this.cantIngr];

  }

}
