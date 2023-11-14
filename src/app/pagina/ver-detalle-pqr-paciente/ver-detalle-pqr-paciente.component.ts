import { Component } from '@angular/core';
import { DetallePQRSDTO } from 'src/app/modelo/detalle-pqrsdto';


@Component({
  selector: 'app-ver-detalle-pqr-paciente',
  templateUrl: './ver-detalle-pqr-paciente.component.html',
  styleUrls: ['./ver-detalle-pqr-paciente.component.scss']
})

export class VerDetallePqrPacienteComponent {
  detallePqrPaciente: DetallePQRSDTO;
  listaPQRs: any[] = [];

  constructor(){
    this.detallePqrPaciente = new DetallePQRSDTO;
    this.listaPQRs = [];
  }


}
