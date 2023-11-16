import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { LoginDTO } from 'src/app/modelo/login-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginDTO: LoginDTO;

  alerta!: Alerta;

  constructor(private authService: AuthService, private tokenService: TokenService) {
    this.loginDTO = new LoginDTO;
  }

  public ingresar() {
    //que se debe hacer para validar si
    //lo que ingreso esta malo, se deben crear variables
    if (this.loginDTO.correo ) {
      //ACÁ EN REGISTRARpACIENTE EL PARAMETRO ESTA BIEN CON this.registroPacietneDTO

      this.authService.login(this.loginDTO).subscribe({
        next: data => {
          this.alerta = { mensaje: data.respuesta, tipo: "success" };
        },
        error: error => {
          this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
        }
      });
    } else {
      this.alerta = { mensaje: "Debe ingresar los datos correctos", tipo: "danger" };
    }
  }

  public login() {
    this.authService.login(this.loginDTO).subscribe({
      next: data => {
        this.tokenService.login(data.respuesta.token);
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }

}
