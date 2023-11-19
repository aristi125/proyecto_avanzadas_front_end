import { Component } from '@angular/core';
import { ItemPQRSDTO } from 'src/app/modelo/item-pqrsdto';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-listar-pqrs-paciente',
  templateUrl: './listar-pqrs-paciente.component.html',
  styleUrls: ['./listar-pqrs-paciente.component.scss']
})

export class ListarPqrsPacienteComponent {
  pqrs: ItemPQRSDTO[];

  constructor(private pacienteService: PacienteService, private tokenService: TokenService) {
    this.pqrs = [];
    this.obtenerPqrs();
  }

  public obtenerPqrs() {
    let codigo = this.tokenService.getCodigo();
    this.pacienteService.listarPQRSPaciente(codigo).subscribe({
      next: data => {
        this.pqrs = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }


}
