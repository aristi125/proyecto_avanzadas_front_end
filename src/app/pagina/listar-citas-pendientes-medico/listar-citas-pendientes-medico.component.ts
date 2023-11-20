import { Component } from '@angular/core';
import { ItemCitasPendienteDTOMedico } from 'src/app/modelo/item-citas-pendiente-dtomedico';
import { MedicoService } from 'src/app/servicios/medico.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-listar-citas-pendientes-medico',
  templateUrl: './listar-citas-pendientes-medico.component.html',
  styleUrls: ['./listar-citas-pendientes-medico.component.scss']
})

export class ListarCitasPendientesMedicoComponent {
  listarCitasPendientesMedico: ItemCitasPendienteDTOMedico[];

  constructor(private medicoService: MedicoService, private tokenService: TokenService){
    this.listarCitasPendientesMedico= [];
    this.obtenerCitasPendientes();
  }

  public obtenerCitasPendientes(){
    let codigo = this.tokenService.getCodigo();
    this.medicoService.listarCitasPendientes(codigo).subscribe({
      next: data => {
        this.listarCitasPendientesMedico = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
