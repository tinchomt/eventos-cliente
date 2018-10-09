import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { AsistenteService } from '../../service/service.index';

@Component({
  selector: 'app-agregar-asistente',
  templateUrl: './agregar-asistente.component.html'
})
export class AgregarAsistenteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router,
    private asistenteService:AsistenteService) { }

    addForm: FormGroup;

  ngOnInit() {
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
    
    this.asistenteService.crearAsistente(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/listar-asistente']);
      });
  }

}
