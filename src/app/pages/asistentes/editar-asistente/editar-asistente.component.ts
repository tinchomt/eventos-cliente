import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Evento } from 'src/app/model/evento.model';
import { Router } from '@angular/router';
import { AsistenteService } from 'src/app/service/service.index';

@Component({
  selector: 'app-editar-asistente',
  templateUrl: './editar-asistente.component.html',
  styleUrls: ['./editar-asistente.component.css']
})
export class EditarAsistenteComponent implements OnInit {

  evento:Evento;
  submitted = false;
  editForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private router: Router,
    private asistenteService:AsistenteService) { }

  ngOnInit() {

    this.evento = JSON.parse(localStorage.getItem("evento"));

    if(!this.evento){
      alert("Debe Seleccionar un Evento");
      this.router.navigate(['/ver-evento']);
      return;
    }

    let asitDNI = localStorage.getItem("dniAsist");


    this.editForm = this.formBuilder.group({
      dni: [],
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

    this.asistenteService.getAsistentePorDni(+asitDNI)
      .subscribe( data => {
        this.editForm.setValue(data);
      });

  }

  get f() { return this.editForm.controls; }

  onSubmit() {

    console.log(this.editForm.invalid);
    console.log(this.editForm.value);

    this.submitted = true;

    if(this.editForm.invalid) return;

    this.asistenteService.actualizarAsistente(this.editForm.value)
      .subscribe( data => {
        this.router.navigate(['listar-asistente']);
    },
         error => {
           alert(error);
         });

    // this.userService.updateUser(this.editForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['list-user']);
    //     },
    //     error => {
    //       alert(error);
    //     });

  }

}
