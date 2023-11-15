import { Component } from '@angular/core';
import { DiaLibreDTO } from 'src/app/modelo/dia-libre-dto';


@Component({
  selector: 'app-agendar-dia-libre',
  templateUrl: './agendar-dia-libre.component.html',
  styleUrls: ['./agendar-dia-libre.component.scss']
})

export class AgendarDiaLibreComponent {
  diaLibreDTO: DiaLibreDTO;

  constructor(){
    this.diaLibreDTO = new DiaLibreDTO();

  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  fechaInvalida: boolean = false;


  validarFecha() {
    const fechaHoy = new Date();
    const fechaSeleccionada = new Date(this.diaLibreDTO.diaLibre);

    // Verificar si la fecha seleccionada es en el futuro
    if (fechaSeleccionada <= fechaHoy) {
      this.fechaInvalida = true;
    } else {
      this.fechaInvalida = false;
    }
  }

}
