import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetallePQRSDTO } from 'src/app/modelo/detalle-pqrsdto';
import { ItemPQRSDTO } from 'src/app/modelo/item-pqrsdto';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { PqrsService } from 'src/app/servicios/pqrs.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-ver-detalle-pqr-paciente',
  templateUrl: './ver-detalle-pqr-paciente.component.html',
  styleUrls: ['./ver-detalle-pqr-paciente.component.scss']
})

export class VerDetallePqrPacienteComponent {
  codigoPqrs: string = "";
  pqrs: DetallePQRSDTO [];

  constructor(private route: ActivatedRoute,private pacienteService: PacienteService, private tokenService: TokenService) {
    this.pqrs = [];
  }

  public obtenerDetallePqrs() {
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
