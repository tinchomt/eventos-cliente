import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AgregarAsistenteComponent } from './agregar-asistente/agregar-asistente.component';
import { ListarAsistenteComponent } from './listar-asistente/listar-asistente.component';
import { EditarAsistenteComponent } from './editar-asistente/editar-asistente.component';
import { VerAccesosComponent } from './ver-accesos/ver-accesos.component';
import { VerEventoComponent } from './eventos/ver-evento/ver-evento.component';
import { LoginGuardGuard } from '../service/service.index';



const pagerRoutes: Routes = [
    {
      path: '',
      component: PagesComponent,
      canActivate:[LoginGuardGuard],
      children: [
  
        { path: 'agregar-asistente', component: AgregarAsistenteComponent },
        { path: 'listar-asistente', component: ListarAsistenteComponent },
        { path: 'editar-asistente', component: EditarAsistenteComponent },
        { path: 'ver-accesos', component: VerAccesosComponent },
        { path: 'ver-evento', component: VerEventoComponent },
        { path: '', redirectTo: 'ver-evento', pathMatch: 'full' }
  
      ]
    }
];
    
  
  export const PAGES_ROUTES = RouterModule.forChild(pagerRoutes);