import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { AsistenteService, AccesosService } from '../../../service/service.index';
import { Evento } from '../../../model/evento.model';
import { RegistraAcceso } from '../../../model/registraAcceso.model';
import { Asistente } from '../../../model/asistente.model';

@Component({
  selector: 'app-agregar-asistente',
  templateUrl: './agregar-asistente.component.html'
})
export class AgregarAsistenteComponent implements OnInit {

  evento:Evento;
  submitted = false;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,
    private asistenteService:AsistenteService,
    private accesosService:AccesosService) { }

   

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
      provincia: ['', ],
      localidad: ['',],
      jurisdiccion: ['', Validators.required],
      cargo: ['', ],
      telefono: ['', ],
      celular_1: ['',],
      celular_2: ['',],
      email: ['', Validators.required]
     
    });
  }

  get g() { return this.addForm.controls; }

  onSubmit() {
    console.log("Agregar");
    
    this.submitted = true;

    if(this.addForm.invalid) return;

    console.log(this.addForm.value);


    let id_usuario = localStorage.getItem('id_usuario');
    let id_grupo = localStorage.getItem('id_grupo');
    let registraAsist = null;
    let asist = null;

    registraAsist = new RegistraAcceso("", this.addForm.value.dni,this.addForm.value.apellido,
    this.addForm.value.nombre,this.evento.id_evento,Number(id_usuario), 1,Number(id_grupo));
    
    this.accesosService.registrarAcceso(registraAsist)
    .subscribe( dataReg => {
      console.log("Se registro "+dataReg);
    });

     asist = new Asistente(this.addForm.value.dni, this.addForm.value.apellido,this.addForm.value.nombre,
      this.addForm.value.provincia, this.addForm.value.localidad,this.addForm.value.jurisdiccion,
      this.addForm.value.cargo,this.addForm.value.telefono,this.addForm.value.celular_1,
      this.addForm.value.celular_2,this.addForm.value.email,Number(id_grupo));

    this.asistenteService.crearAsistente(asist)
      .subscribe( data => {
        this.router.navigate(['/listar-asistente']);
      });

      
  }

}
