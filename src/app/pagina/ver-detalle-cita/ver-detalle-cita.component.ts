import { Component } from '@angular/core';
import { HistorialPacienteDTO } from 'src/app/modelo/historial-paciente-dto';


@Component({
  selector: 'app-ver-detalle-cita',
  templateUrl: './ver-detalle-cita.component.html',
  styleUrls: ['./ver-detalle-cita.component.scss']
})

export class VerDetalleCitaComponent {
  detalleCita: HistorialPacienteDTO;
  listaPacientes: any [] = [];

  constructor(){
    this.detalleCita = new HistorialPacienteDTO;
    this.listaPacientes = [];
  }

}
