import { Injectable } from '@angular/core';
import { ItemCitaPendientePacienteDTO } from '../modelo/item-cita-pendiente-paciente-dto';
import { AgendarCitaPacienteDTO } from '../modelo/agendar-cita-paciente-dto';

@Injectable({
  providedIn: 'root'
})

export class CitaService {
  citas: ItemCitaPendientePacienteDTO[];

  constructor() {
    this.citas = [];
    this.citas.push( {codigoCita: 1, nombreMedico: 'Michael', fechaCita: '2023-12-12',
    especialidad: 'matar', estadoCita: 'PROGRAMADA'});
    this.citas.push( {codigoCita: 2, nombreMedico: 'Manuela', fechaCita: '2023-12-29',
    especialidad: 'sanar', estadoCita: 'PROGRAMADA'});
    this.citas.push( {codigoCita: 3, nombreMedico: 'Manolo', fechaCita: '2023-12-12',
    especialidad: 'descansar', estadoCita: 'CANCELADA'});
  }

  public listar(): ItemCitaPendientePacienteDTO[]{
    return this.citas;
  }

  public obtener(codigoCita: number): ItemCitaPendientePacienteDTO | undefined{
    return this.citas.find(citas => citas.codigoCita == codigoCita);
  }

  public agendar(citas: AgendarCitaPacienteDTO){
    let codigoCita = this.citas.length +1;
    this.citas.push({codigoCita: codigoCita, nombreMedico: citas.codigoMedico, fechaCita: new Date().toISOString(),
    especialidad: citas.especialidad, estadoCita: 'PROGRAMADA'});
  }
}
