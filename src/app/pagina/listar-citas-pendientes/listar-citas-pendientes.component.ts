
import { Component, importProvidersFrom } from '@angular/core';
import { ItemCitaPendientePacienteDTO } from 'src/app/modelo/item-cita-pendiente-paciente-dto';

@Component({
  selector: 'app-listar-citas-pendientes',
  templateUrl: './listar-citas-pendientes.component.html',
  styleUrls: ['./listar-citas-pendientes.component.scss']
})

export class ListarCitasPendientesComponent {
  citasPendientes: ItemCitaPendientePacienteDTO;
  listaCitas: any[] = [];

  constructor(){
    this.citasPendientes = new ItemCitaPendientePacienteDTO;
    this.listaCitas = [];
  }

}
