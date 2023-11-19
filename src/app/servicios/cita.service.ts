import { Injectable } from '@angular/core';
import { ItemCitaPendientePacienteDTO } from '../modelo/item-cita-pendiente-paciente-dto';
import { AgendarCitaPacienteDTO } from '../modelo/agendar-cita-paciente-dto';
import { HttpClient } from '@angular/common/http';
import { ItemCitasPendienteDTOMedico } from '../modelo/item-citas-pendiente-dtomedico';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CitaService {

  private userUrl = "http://localhost:8081/api/pacientes";
  agendarCitaDTO: ItemCitaPendientePacienteDTO[];

  constructor(private http: HttpClient) {
    this.agendarCitaDTO = [];
   }


  /*constructor() {
    this.citas = [];
    this.citas.push( {codigoCita: 1, nombreMedico: 'Michael', fechaCita: '2023-12-12',
    especialidad: 'matar', estadoCita: 'PROGRAMADA'});
    this.citas.push( {codigoCita: 2, nombreMedico: 'Manuela', fechaCita: '2023-12-29',
    especialidad: 'sanar', estadoCita: 'PROGRAMADA'});
    this.citas.push( {codigoCita: 3, nombreMedico: 'Manolo', fechaCita: '2023-12-12',
    especialidad: 'descansar', estadoCita: 'CANCELADA'});
  }*/

  public listar(): ItemCitaPendientePacienteDTO[]{
    return this.agendarCitaDTO;
  }

  public obtener(codigoCita: number): ItemCitaPendientePacienteDTO | undefined{
    return this.agendarCitaDTO.find(citas => citas.codigoCita == codigoCita);
  }

  public listarCitasPaciente(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-citas-paciente/${codigo}`);
  }

  public agendarCita(agendarCitaDTO: AgendarCitaPacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/agendar-cita`, agendarCitaDTO);
  }

  public verDetallePaciente(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/detalle/${codigo}`);
  }

  public agendar(citas: AgendarCitaPacienteDTO){
    let codigoCita = this.agendarCitaDTO.length +1;
    this.agendarCitaDTO.push({codigoCita: codigoCita, nombreMedico: citas.codigoMedico, fechaCita: new Date().toISOString(),
    especialidad: citas.especialidad, estadoCita: 'PROGRAMADA'});
  }
}
