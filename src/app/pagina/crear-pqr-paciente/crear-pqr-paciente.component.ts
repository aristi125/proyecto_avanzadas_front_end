import { Component } from '@angular/core';
import { CrearPQRSDTO } from 'src/app/modelo/crear-pqrsdto';
import { PqrsService } from 'src/app/servicios/pqrs.service';
import { Alerta } from 'src/app/modelo/alerta';
import { TokenService } from 'src/app/servicios/token.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { CitaService } from 'src/app/servicios/cita.service';


@Component({
  selector: 'app-crear-pqr-paciente',
  templateUrl: './crear-pqr-paciente.component.html',
  styleUrls: ['./crear-pqr-paciente.component.scss']
})

export class CrearPqrPacienteComponent {
  crearPqrPaciente: CrearPQRSDTO;
  tipo: string[];
  alerta!: Alerta;

  constructor(private pqrsService: PqrsService,private citaService: CitaService,private pacienteService: PacienteService, private clinicaService: ClinicaService, private tokenService: TokenService){
    this.crearPqrPaciente = new CrearPQRSDTO;
    this.tipo = [];
    this.cargarTipo();
  }

  public crearPqrs(){
    this.pacienteService.crearPQRS(this.crearPqrPaciente).subscribe({
      next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }

  public seleccionar(codigo:number){
    this.crearPqrPaciente.codigo = codigo;
  }

  private cargarTipo(){
    this.clinicaService.listarCiudades().subscribe({
      next: data => {
        this.tipo = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

}
