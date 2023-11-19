import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { CambiarPasswordDTO } from 'src/app/modelo/cambiar-password-dto';
import { DetallePacienteDTO } from 'src/app/modelo/detalle-paciente-dto';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent {
  editarPerfilPaciente: DetallePacienteDTO;
  cambiarPasswordDTO: CambiarPasswordDTO;
  ciudades: string[];
  eps: string[];
  tipoSangre: string[];
  alerta!: Alerta;

  constructor(private pacienteService: PacienteService, private clinicaService: ClinicaService, private tokenService: TokenService, private imagenService: ImagenService) {
    this.editarPerfilPaciente = new DetallePacienteDTO;
    this.cambiarPasswordDTO = new CambiarPasswordDTO;
    this.ciudades = [];
    this.eps = [];
    this.tipoSangre = [];
    this.cargarCiudades();
    this.cargarEPS();
    this.cargarTipoSangre();
  }

  public editarPerfil() {
    this.pacienteService.editarPerfil(this.editarPerfilPaciente).subscribe({
      next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }

  public eliminarCuenta (){
    let codigo = this.tokenService.getCodigo();
    this.pacienteService.eliminarCuenta(codigo).subscribe({
      next: data => {
        this.editarPerfilPaciente.codigo = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public cambiarContrasena() {
    this.pacienteService.cambiarPassword(this.cambiarPasswordDTO).subscribe({
      next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }


  private cargarCiudades() {
  this.clinicaService.listarCiudades().subscribe({
    next: data => {
      this.ciudades = data.respuesta;
    },
    error: error => {
      console.log(error);
    }
  });
}

  private cargarEPS() {
  this.clinicaService.listarEPS().subscribe({
    next: data => {
      this.eps = data.respuesta;
    },
    error: error => {
      console.log(error);
    }
  });

}

  private cargarTipoSangre() {
  this.clinicaService.listarTipoSangre().subscribe({
    next: data => {
      this.tipoSangre = data.respuesta;
    },
    error: error => {
      console.log(error);
    }
  });
}

onlyNumberKey(event: any) {
  const charCode = event.which ? event.which : event.keyCode;
  return !(charCode > 31 && (charCode < 48 || charCode > 57));
}
}
