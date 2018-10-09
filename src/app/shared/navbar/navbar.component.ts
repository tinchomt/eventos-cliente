import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/service.index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(public _usuarioService:UsuarioService) { }

  ngOnInit() {
  }

}
