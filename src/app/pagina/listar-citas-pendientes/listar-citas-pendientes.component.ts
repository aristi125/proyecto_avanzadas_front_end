
import { Component, importProvidersFrom } from '@angular/core';
import { ItemCitaPendientePacienteDTO } from 'src/app/modelo/item-cita-pendiente-paciente-dto';
import { CitaService } from 'src/app/servicios/cita.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-listar-citas-pendientes',
  templateUrl: './listar-citas-pendientes.component.html',
  styleUrls: ['./listar-citas-pendientes.component.scss']
})

export class ListarCitasPendientesComponent {
  citasPendientes: ItemCitaPendientePacienteDTO[];

  constructor(private citasService: CitaService, private tokenService: TokenService){
    this.citasPendientes = [];
    this.obtenerCitasPendientes();
  }

  public obtenerCitasPendientes(){
    let codigo = this.tokenService.getCodigo();
    this.citasService.listarCitasPaciente(codigo).subscribe({
      next: data => {
        this.citasPendientes = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
