import { Component } from '@angular/core';
import { AgendarCitaPacienteDTO } from 'src/app/modelo/agendar-cita-paciente-dto';
import { CitaService } from 'src/app/servicios/cita.service';


@Component({
  selector: 'app-crear-cita-paciente',
  templateUrl: './crear-cita-paciente.component.html',
  styleUrls: ['./crear-cita-paciente.component.scss']
})

export class CrearCitaPacienteComponent {

  crearCitaPaciente: AgendarCitaPacienteDTO;

  constructor(private citaService: CitaService){
    this.crearCitaPaciente = new AgendarCitaPacienteDTO;
  }

  public agendarCita(){
    this.citaService.agendar(this.crearCitaPaciente);
  }
//NO TENTIENDO
  public selecccionar(codigoMedico:string){
    this.crearCitaPaciente.codigoMedico = codigoMedico;
  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  fechaInvalida: boolean = false;


  validarFecha() {
    const fechaHoy = new Date();
    const fechaSeleccionada = new Date(this.crearCitaPaciente.fechaCita);

    // Verificar si la fecha seleccionada es en el futuro
    if (fechaSeleccionada <= fechaHoy) {
      this.fechaInvalida = true;
    } else {
      this.fechaInvalida = false;
    }
  }

}
