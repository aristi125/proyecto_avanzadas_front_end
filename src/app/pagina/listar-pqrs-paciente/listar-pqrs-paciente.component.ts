import { Component } from '@angular/core';
import { ItemPQRSDTO } from 'src/app/modelo/item-pqrsdto';


@Component({
  selector: 'app-listar-pqrs-paciente',
  templateUrl: './listar-pqrs-paciente.component.html',
  styleUrls: ['./listar-pqrs-paciente.component.scss']
})

export class ListarPqrsPacienteComponent {
  listarPqrsPaciente: ItemPQRSDTO;
  estadoPqr: string [];
  pqrs: any[] = [];

  constructor(){
    this.listarPqrsPaciente = new ItemPQRSDTO;
    this.estadoPqr = [];
    this.pqrs = [];
    this.cargarEstadoPqrs();
  }

  private cargarEstadoPqrs(){
    this.estadoPqr.push("Aprobado");
    this.estadoPqr.push("Rechazado");
    this.estadoPqr.push("En proceso");
    this.estadoPqr.push("Finalizado");
  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  fechaInvalida: boolean = false;
  validarFecha() {
    const fechaHoy = new Date();
    const fechaSeleccionada = new Date(this.listarPqrsPaciente.fecha);

    // Verificar si la fecha seleccionada es en el futuro
    if (fechaSeleccionada <= fechaHoy) {
      this.fechaInvalida = true;
    } else {
      this.fechaInvalida = false;
    }
  }

}
