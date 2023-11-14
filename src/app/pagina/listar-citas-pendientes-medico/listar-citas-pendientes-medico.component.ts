import { Component } from '@angular/core';
import { ItemCitasPendienteDTOMedico } from 'src/app/modelo/item-citas-pendiente-dtomedico';


@Component({
  selector: 'app-listar-citas-pendientes-medico',
  templateUrl: './listar-citas-pendientes-medico.component.html',
  styleUrls: ['./listar-citas-pendientes-medico.component.scss']
})

export class ListarCitasPendientesMedicoComponent {
  listarCitasPendientesMedico: ItemCitasPendienteDTOMedico;
  listaCitasMedico: any[] = [];

  constructor(){
    this.listarCitasPendientesMedico= new ItemCitasPendienteDTOMedico;
    this.listaCitasMedico = [];
  }

}
