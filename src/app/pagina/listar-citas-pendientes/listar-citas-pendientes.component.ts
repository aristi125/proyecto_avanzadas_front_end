
import { Component, importProvidersFrom } from '@angular/core';
import { ItemCitaPendientePacienteDTO } from 'src/app/modelo/item-cita-pendiente-paciente-dto';
import { CitaService } from 'src/app/servicios/cita.service';

@Component({
  selector: 'app-listar-citas-pendientes',
  templateUrl: './listar-citas-pendientes.component.html',
  styleUrls: ['./listar-citas-pendientes.component.scss']
})

export class ListarCitasPendientesComponent {
  citasPendientes: ItemCitaPendientePacienteDTO[];

  constructor(private citasService: CitaService){
    this.citasPendientes = citasService.listar();
  }

}
