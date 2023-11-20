import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { DiaLibreDTO } from 'src/app/modelo/dia-libre-dto';
import { MedicoService } from 'src/app/servicios/medico.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-agendar-dia-libre',
  templateUrl: './agendar-dia-libre.component.html',
  styleUrls: ['./agendar-dia-libre.component.scss']
})

export class AgendarDiaLibreComponent {
  diaLibreDTO: DiaLibreDTO;
  alerta!: Alerta;

  constructor(private medicoService: MedicoService,private tokenService: TokenService){
    this.diaLibreDTO = new DiaLibreDTO();
    this.obtenerDiaLibre();

  }

  public obtenerDiaLibre(){
    this.medicoService.agendarDiaLibre(this.diaLibreDTO).subscribe({
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
