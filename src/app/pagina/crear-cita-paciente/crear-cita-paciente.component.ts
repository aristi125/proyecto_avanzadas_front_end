import { Component } from '@angular/core';
import { AgendarCitaPacienteDTO } from 'src/app/modelo/agendar-cita-paciente-dto';


@Component({
  selector: 'app-crear-cita-paciente',
  templateUrl: './crear-cita-paciente.component.html',
  styleUrls: ['./crear-cita-paciente.component.scss']
})

export class CrearCitaPacienteComponent {

  crearCitaPaciente: AgendarCitaPacienteDTO;
  especiaildad: string [];

  constructor(){
    this.crearCitaPaciente = new AgendarCitaPacienteDTO;
    this.especiaildad = [];
    this.cargarEspecialidad();
  }

  public cargarEspecialidad(){
    this.especiaildad.push("Cardiologia")
    this.especiaildad.push("Neurologia")
    this.especiaildad.push("Pedriata")
    this.especiaildad.push("Oncologia")
    this.especiaildad.push("Ortopedia")
    this.especiaildad.push("Cirujano plastico")
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
