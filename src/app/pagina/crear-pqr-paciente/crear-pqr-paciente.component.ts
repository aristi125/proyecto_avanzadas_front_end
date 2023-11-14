import { Component } from '@angular/core';
import { CrearPQRSDTO } from 'src/app/modelo/crear-pqrsdto';


@Component({
  selector: 'app-crear-pqr-paciente',
  templateUrl: './crear-pqr-paciente.component.html',
  styleUrls: ['./crear-pqr-paciente.component.scss']
})

export class CrearPqrPacienteComponent {
  crearPqrPaciente: CrearPQRSDTO;

  constructor(){
    this.crearPqrPaciente = new CrearPQRSDTO;
  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
  
}
