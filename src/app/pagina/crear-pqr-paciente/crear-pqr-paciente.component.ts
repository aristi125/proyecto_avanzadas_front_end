import { Component } from '@angular/core';
import { CrearPQRSDTO } from 'src/app/modelo/crear-pqrsdto';
import { PqrsService } from 'src/app/servicios/pqrs.service';


@Component({
  selector: 'app-crear-pqr-paciente',
  templateUrl: './crear-pqr-paciente.component.html',
  styleUrls: ['./crear-pqr-paciente.component.scss']
})

export class CrearPqrPacienteComponent {
  crearPqrPaciente: CrearPQRSDTO;

  constructor(private pqrsService: PqrsService){
    this.crearPqrPaciente = new CrearPQRSDTO;
  }

  public crearPqrs(){
    this.pqrsService.crear(this.crearPqrPaciente);
  }

  public seleccionar(codigo:number){
    this.crearPqrPaciente.codigo = codigo;
    }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

}
