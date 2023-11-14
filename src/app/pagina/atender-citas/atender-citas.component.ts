import { Component } from '@angular/core';
import { AtenderConsultaPacienteDTO } from 'src/app/modelo/atender-consulta-paciente-dto';


@Component({
  selector: 'app-atender-citas',
  templateUrl: './atender-citas.component.html',
  styleUrls: ['./atender-citas.component.scss']
})

export class AtenderCitasComponent {
  atenderCitasDTO: AtenderConsultaPacienteDTO;

  constructor(){
    this.atenderCitasDTO = new AtenderConsultaPacienteDTO;
  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
}
