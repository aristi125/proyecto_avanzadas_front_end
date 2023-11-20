import { Component } from '@angular/core';
import { HistorialPacienteDTO } from 'src/app/modelo/historial-paciente-dto';
import { ItemCitaPendientePacienteDTO } from 'src/app/modelo/item-cita-pendiente-paciente-dto';
import { ItemCitasActualDTOMedico } from 'src/app/modelo/item-citas-actual-dtomedico';
import { ItemCitasPendienteDTOMedico } from 'src/app/modelo/item-citas-pendiente-dtomedico';
import { MedicoService } from 'src/app/servicios/medico.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-listar-citas-realizadas',
  templateUrl: './listar-citas-realizadas.component.html',
  styleUrls: ['./listar-citas-realizadas.component.scss']
})
export class ListarCitasRealizadasComponent {

  historialCitas: ItemCitasActualDTOMedico[];

  constructor(private medicoService: MedicoService, private tokenService: TokenService){

    this.historialCitas = [];

    this.obtenerHistorial();

  }

  public obtenerHistorial(){

    let codigo = this.tokenService.getCodigo();
    this.medicoService.listarTodasCitasPacientes(codigo).subscribe({
      next: data => {
        this.historialCitas = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });

  }

}
