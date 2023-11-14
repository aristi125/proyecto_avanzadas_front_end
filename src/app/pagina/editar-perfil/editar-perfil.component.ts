import { Component } from '@angular/core';
import { DetallePacienteDTO } from 'src/app/modelo/detalle-paciente-dto';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent {
  editarPerfilPaciente: DetallePacienteDTO;
  ciudades: string[];
  eps : string[];
  tipoSangre: string[];

  constructor(){
    this.editarPerfilPaciente = new DetallePacienteDTO;
    this.ciudades = [];
    this.eps = [];
    this.tipoSangre = [];
    this.cargarCiudades();
    this.cargarEPS();
    this.cargarTipoSangre();
  }

  private cargarCiudades(){
    this.ciudades.push("Armenia");
    this.ciudades.push("Calarcá");
    this.ciudades.push("Pereira");
    this.ciudades.push("Manizales");
    this.ciudades.push("Medellín");
    }

  private cargarEPS(){
    this.eps.push("Nueva eps");
    this.eps.push("Sura");
    this.eps.push("Coomeva");
    this.eps.push("Asmet salud");
    this.eps.push("Sanitas");

  }

  private cargarTipoSangre(){
    this.tipoSangre.push("A+");
    this.tipoSangre.push("A-");
    this.tipoSangre.push("B+");
    this.tipoSangre.push("B-");
    this.tipoSangre.push("AB+");
    this.tipoSangre.push("AB-");
    this.tipoSangre.push("O+");
    this.tipoSangre.push("O-");
  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
}
