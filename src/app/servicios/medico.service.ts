import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { AtenderConsultaPacienteDTO } from '../modelo/atender-consulta-paciente-dto';
import { DiaLibreDTO } from '../modelo/dia-libre-dto';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private userUrl = "http://localhost:8081/api/medicos";

  constructor(private http: HttpClient) { }

  public listarCitasPendientes(codigo: number): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-citas-pendientes/${codigo}`);
  }

  public atenderCitas(atenderConsultaPacienteDTO: AtenderConsultaPacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/atender-citas`, atenderConsultaPacienteDTO);
  }

  public listasUnaCitasPaciente(codigo: number): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-una-cita-pacientes/${codigo}`);
  }

  public agendarDiaLibre(diaLibreDTO: DiaLibreDTO): Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.userUrl}/agendar-dia-libre`, diaLibreDTO);
  }

  public listarTodasCitasPacientes(codigo: number): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-todas-citas-pacientes/${codigo}`);
  }

}
