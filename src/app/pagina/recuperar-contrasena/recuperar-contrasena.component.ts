import { Component } from '@angular/core';
import { RecupararPasswordPacienteDTO } from 'src/app/modelo/recuparar-password-paciente-dto';


@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss']
})

export class RecuperarContrasenaComponent {
  recuperarContrasena: RecupararPasswordPacienteDTO;

  constructor(){
    this.recuperarContrasena = new RecupararPasswordPacienteDTO;
  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

}
