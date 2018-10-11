import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { AsistenteService, AccesosService } from '../../service/service.index';
import { Evento } from '../../model/evento.model';
import { RegistraAcceso } from '../../model/registraAcceso.model';

@Component({
  selector: 'app-agregar-asistente',
  templateUrl: './agregar-asistente.component.html'
})
export class AgregarAsistenteComponent implements OnInit {

  evento:Evento;

  constructor(private formBuilder: FormBuilder,private router: Router,
    private asistenteService:AsistenteService,
    private accesosService:AccesosService) { }

    addForm: FormGroup;

  ngOnInit() {

    this.evento = JSON.parse(localStorage.getItem("evento"));

    if(!this.evento){
      alert("Debe Seleccionar un Evento");
      this.router.navigate(['/ver-evento']);
      return;
    }

    this.addForm = this.formBuilder.group({
      dni: ['',Validators.required ],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      provincia: ['', Validators.required],
      localidad: ['', Validators.required],
      jurisdiccion: ['', Validators.required],
      cargo: ['', Validators.required],
      telefono: ['', Validators.required],
      celular_1: ['', Validators.required],
      celular_2: ['', Validators.required],
      email: ['', Validators.required]
     
    });
  }

  onSubmit() {
    console.log("Agregar");
    console.log(this.addForm.value);

    let id_usuario = localStorage.getItem('id_usuario');
    let id_grupo = localStorage.getItem('id_grupo');

    let registraAsist = new RegistraAcceso("", this.addForm.value.dni,this.addForm.value.apellido,
    this.addForm.value.nombre,this.evento.id_evento,Number(id_usuario), 1,Number(id_grupo));
    
    this.accesosService.registrarAcceso(registraAsist)
    .subscribe( dataReg => {
      console.log("Se registro "+dataReg);
    });

    this.asistenteService.crearAsistente(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/listar-asistente']);
      });

      
  }

}
