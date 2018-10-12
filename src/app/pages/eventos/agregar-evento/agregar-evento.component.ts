import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventoService } from '../../../service/service.index';
import { Evento } from '../../../model/evento.model';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css']
})
export class AgregarEventoComponent implements OnInit {

  addEventoForm:FormGroup;
  submitted = false;
  
  
  constructor(private formBuilder: FormBuilder,private router: Router,
    private _eventoService:EventoService) { }

  ngOnInit() {

    this.addEventoForm = this.formBuilder.group({

      descripcion:['',Validators.required],
      fecha_inicio:['',Validators.required],
      fecha_fin:['',Validators.required]

    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.addEventoForm.controls; }

  onSubmit() {

    this.submitted = true;

     // stop here if form is invalid
     if (this.addEventoForm.invalid) {
      return;
  }

  console.log(this.addEventoForm.value);
  let id_grupo = localStorage.getItem('id_grupo');

   let evento = new Evento(null,this.addEventoForm.value.descripcion,
    this.addEventoForm.value.fecha_inicio,this.addEventoForm.value.fecha_fin,Number(id_grupo));

   this._eventoService.crearEvento(evento)
       .subscribe( data => {
         this.router.navigate(['ver-evento']);
       });


  }

}
