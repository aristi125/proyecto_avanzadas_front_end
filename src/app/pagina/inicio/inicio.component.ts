import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CrearCitaPacienteComponent } from '../crear-cita-paciente/crear-cita-paciente.component';


const routes: Routes = [
  {
    path: 'crear-cita-paciente', component: CrearCitaPacienteComponent,
  },
];

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

}
