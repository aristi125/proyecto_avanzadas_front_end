import { Component } from '@angular/core';
import { FiltroBusquedaDTO } from 'src/app/modelo/filtro-busqueda-dto';


@Component({
  selector: 'app-filtrar-medico-fecha-paciente',
  templateUrl: './filtrar-medico-fecha-paciente.component.html',
  styleUrls: ['./filtrar-medico-fecha-paciente.component.scss']
})

export class FiltrarMedicoFechaPacienteComponent {
  filtroBusquedad: FiltroBusquedaDTO;
  citas: any[] = [];

  constructor(){
    this.filtroBusquedad = new FiltroBusquedaDTO;
    this.citas = [];

  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  fechaInvalida: boolean = false;

  validarFecha() {
    const fechaHoy = new Date();
    const fechaSeleccionada = new Date(this.filtroBusquedad.fecha);

    // Verificar si la fecha seleccionada es en el futuro
    if (fechaSeleccionada <= fechaHoy) {
      this.fechaInvalida = true;
    } else {
      this.fechaInvalida = false;
    }
  }
}
