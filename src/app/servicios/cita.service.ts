import { Injectable } from '@angular/core';
import { ItemCitaPendientePacienteDTO } from '../modelo/item-cita-pendiente-paciente-dto';
import { AgendarCitaPacienteDTO } from '../modelo/agendar-cita-paciente-dto';
import { HttpClient } from '@angular/common/http';
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
}
