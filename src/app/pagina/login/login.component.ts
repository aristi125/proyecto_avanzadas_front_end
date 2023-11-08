import { Component } from '@angular/core';
import { LoginDTO } from 'src/app/modelo/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginDTO: LoginDTO;

  constructor(){
    this.loginDTO = new LoginDTO;
  }

  public ingresar(){
    //que se debe hacer para validar si
    //lo que ingreso esta malo, se deben crear variables
  }
}
