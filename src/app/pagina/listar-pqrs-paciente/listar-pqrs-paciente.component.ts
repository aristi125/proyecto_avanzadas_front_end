import { Component } from '@angular/core';
import { ItemPQRSDTO } from 'src/app/modelo/item-pqrsdto';
import { PqrsService } from 'src/app/servicios/pqrs.service';


@Component({
  selector: 'app-listar-pqrs-paciente',
  templateUrl: './listar-pqrs-paciente.component.html',
  styleUrls: ['./listar-pqrs-paciente.component.scss']
})

export class ListarPqrsPacienteComponent {
  pqrs: ItemPQRSDTO[];

  constructor(private pqrsService: PqrsService){
    this.pqrs = pqrsService.listar();
  }


}
