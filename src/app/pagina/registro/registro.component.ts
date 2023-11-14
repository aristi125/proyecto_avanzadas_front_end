import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  registroPacienteDTO: RegistroPacienteDTO;
  ciudades: string[];
  eps : string[];
  tipoSangre: string[];
  archivos!:FileList;

  constructor() {
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.ciudades = [];
    this.eps = [];
    this.tipoSangre = [];
    this.cargarCiudades();
    this.cargarEPS();
    this.cargarTipoSangre();
  }

  public registrar(){
    if(this.archivos != null && this.archivos.length > 0){
    console.log(this.registroPacienteDTO);
    }else{
    console.log("Debe cargar una foto");
    }
    }

  public sonIguales(): boolean {
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
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

    public onFileChange(event:any){
      if (event.target.files.length > 0) {
      const files = event.target.files;
      this.archivos = event.target.files;
      console.log(files);
      }
      }
}
