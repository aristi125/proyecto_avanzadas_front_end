import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { AgendarCitaPacienteDTO } from 'src/app/modelo/agendar-cita-paciente-dto';
import { CitaService } from 'src/app/servicios/cita.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-crear-cita-paciente',
  templateUrl: './crear-cita-paciente.component.html',
  styleUrls: ['./crear-cita-paciente.component.scss']
})

export class CrearCitaPacienteComponent {

  crearCitaPaciente: AgendarCitaPacienteDTO;
  especialidad: string[];
  alerta!: Alerta;

  constructor(private citaService: CitaService,private pacienteService: PacienteService, private clinicaService: ClinicaService, private tokenService: TokenService){
    this.crearCitaPaciente = new AgendarCitaPacienteDTO;
    this.especialidad = [];
    this.cargarEspecialidad();
  }


  public agendarCitaa(){
    this.citaService.agendar(this.crearCitaPaciente);
  }

  public agendarCita() {
    this.citaService.agendarCita(this.crearCitaPaciente).subscribe({
      next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });

  }

  private cargarEspecialidad() {
    this.clinicaService.listarEspecialidades().subscribe({
      next: data => {
        this.especialidad = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    })
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
