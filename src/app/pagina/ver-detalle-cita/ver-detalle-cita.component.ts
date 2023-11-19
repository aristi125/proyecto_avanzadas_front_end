import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistorialPacienteDTO } from 'src/app/modelo/historial-paciente-dto';
import { ItemCitaPendientePacienteDTO } from 'src/app/modelo/item-cita-pendiente-paciente-dto';
import { CitaService } from 'src/app/servicios/cita.service';


@Component({
  selector: 'app-ver-detalle-cita',
  templateUrl: './ver-detalle-cita.component.html',
  styleUrls: ['./ver-detalle-cita.component.scss']
})

export class VerDetalleCitaComponent {
  codigoDetallePaciente: string = "";

  detalleCita: ItemCitaPendientePacienteDTO | undefined;

  constructor(private route: ActivatedRoute, private citaSercive: CitaService){
    this.route.params.subscribe(params => {
      this.codigoDetallePaciente = params['codigo'];
      let detalleConsultado = citaSercive.obtener(parseInt(this.codigoDetallePaciente));
      if (detalleConsultado != undefined) {
        this.detalleCita = detalleConsultado;
      }
    });
  }
}
