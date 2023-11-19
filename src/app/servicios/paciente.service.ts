import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { CrearPQRSDTO } from '../modelo/crear-pqrsdto';
import { DetallePacienteDTO } from '../modelo/detalle-paciente-dto';
import { ImagenDTO } from '../modelo/imagen-dto';
import { CambiarPasswordDTO } from '../modelo/cambiar-password-dto';
import { AgendarCitaPacienteDTO } from '../modelo/agendar-cita-paciente-dto';
import { FiltroBusquedaDTO } from '../modelo/filtro-busqueda-dto';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private userUrl = "http://localhost:8081/api/pacientes";

  constructor(private http: HttpClient) { }

  public editarPerfil(pacienteDTO: DetallePacienteDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/editar-perfil`, pacienteDTO);
  }

  public eliminarCuenta(codigo: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigo}`);
  }

  //no se su se utilice
  public enviarLinkRecuperacion(): Observable<MensajeDTO>{
    return this.http.put<MensajeDTO>(`${this.userUrl}/enviar-link-recuperacion`,ImagenDTO );
  }

  public cambiarPassword(CambiarPasswordDTO: CambiarPasswordDTO): Observable<MensajeDTO>{
    return this.http.put<MensajeDTO>(`${this.userUrl}/cambiar-password`, CambiarPasswordDTO);
  }

  public agendarCita(agendarCitaDTO: AgendarCitaPacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/agendar-cita`, agendarCitaDTO);
  }

  public crearPQRS(registroPQRSDTO: CrearPQRSDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/crear-pqrs`, registroPQRSDTO);
  }

  public listarPQRSPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-pqrs/${codigoPaciente}`);
  }

  public verDetallePQRS(codigo: number): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.userUrl}/ver-detalle-pqrs/${codigo}`);
  }

  //NO CREO QUE SE UTILICE
  public responderPQRS(codigo: number): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-pqrs/${codigo}`);
  }

  //COM SE LE PASA EL EL filtroBusquedaDTO al lado de la url SI ES UN GET
  public filtrarCitasPorFecha(filtroBusquedaDTO: FiltroBusquedaDTO): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/filtrar-citas-por-fecha`);
  }

  //COM SE LE PASA EL EL filtroBusquedaDTO al lado de la url SI ES UN GET
  public filtrarCitasPorMedico(filtroBusquedaDTO: FiltroBusquedaDTO): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/filtrar-citas-por-medico`);
  }

  //FALTA UNO







}
