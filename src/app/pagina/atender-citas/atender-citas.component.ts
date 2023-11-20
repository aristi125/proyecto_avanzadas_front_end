import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { AtenderConsultaPacienteDTO } from 'src/app/modelo/atender-consulta-paciente-dto';
import { CitaService } from 'src/app/servicios/cita.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { MedicoService } from 'src/app/servicios/medico.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-atender-citas',
  templateUrl: './atender-citas.component.html',
  styleUrls: ['./atender-citas.component.scss']
})

export class AtenderCitasComponent {
  atenderCitasDTO: AtenderConsultaPacienteDTO;
  alerta!: Alerta;

  constructor(private citaService: CitaService,private medicoService: MedicoService, private clinicaService: ClinicaService, private tokenService: TokenService){
    this.atenderCitasDTO = new AtenderConsultaPacienteDTO;
  }

  public atenderCitas(){
    this.medicoService.atenderCitas(this.atenderCitasDTO).subscribe({
      next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
}
