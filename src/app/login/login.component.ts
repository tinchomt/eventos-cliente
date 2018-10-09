import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import { UsuarioService } from '../service/service.index';
import { UsuarioLogin } from '../model/usuarioLogin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, 
              private router: Router,
               private _usuarioService:UsuarioService) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  
    let usuarioLogin = new UsuarioLogin(this.loginForm.controls.email.value,
      this.loginForm.controls.password.value);

    this._usuarioService.login(usuarioLogin).subscribe( correcto => this.router.navigate(['/ver-evento']));


    
    // if(this.loginForm.controls.email.value == 'mt' && this.loginForm.controls.password.value == 'mt') {
    //     this.router.navigate(['/listar-asistente']);
    // }else {
    //   this.invalidLogin = true;
    // }
  
  
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


}
