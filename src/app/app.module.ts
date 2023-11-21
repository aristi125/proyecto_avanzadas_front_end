import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { EditarPerfilComponent } from './pagina/editar-perfil/editar-perfil.component';
import { ListarCitasPendientesComponent } from './pagina/listar-citas-pendientes/listar-citas-pendientes.component';
import { AtenderCitasComponent } from './pagina/atender-citas/atender-citas.component';
import { ListarCitasRealizadasComponent } from './pagina/listar-citas-realizadas/listar-citas-realizadas.component';
import { AgendarDiaLibreComponent } from './pagina/agendar-dia-libre/agendar-dia-libre.component';
import { CrearCitaPacienteComponent } from './pagina/crear-cita-paciente/crear-cita-paciente.component';
import { CrearPqrPacienteComponent } from './pagina/crear-pqr-paciente/crear-pqr-paciente.component';
import { FiltrarMedicoFechaPacienteComponent } from './pagina/filtrar-medico-fecha-paciente/filtrar-medico-fecha-paciente.component';
import { InicioMedicoComponent } from './pagina/inicio-medico/inicio-medico.component';
import { InicioPacienteComponent } from './pagina/inicio-paciente/inicio-paciente.component';
import { ListarCitaComponent } from './pagina/listar-cita/listar-cita.component';
import { ListarPqrsPacienteComponent } from './pagina/listar-pqrs-paciente/listar-pqrs-paciente.component';
import { RecuperarContrasenaComponent } from './pagina/recuperar-contrasena/recuperar-contrasena.component';
import { VerDetalleCitaComponent } from './pagina/ver-detalle-cita/ver-detalle-cita.component';
import { VerDetallePqrPacienteComponent } from './pagina/ver-detalle-pqr-paciente/ver-detalle-pqr-paciente.component';
import { ListarCitasPendientesMedicoComponent } from './pagina/listar-citas-pendientes-medico/listar-citas-pendientes-medico.component';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    EditarPerfilComponent,
    ListarCitasPendientesComponent,
    AtenderCitasComponent,
    ListarCitasRealizadasComponent,
    AgendarDiaLibreComponent,
    CrearCitaPacienteComponent,
    CrearPqrPacienteComponent,
    FiltrarMedicoFechaPacienteComponent,
    InicioMedicoComponent,
    InicioPacienteComponent,
    ListarCitaComponent,
    ListarPqrsPacienteComponent,
    RecuperarContrasenaComponent,
    VerDetalleCitaComponent,
    VerDetallePqrPacienteComponent,
    ListarCitasPendientesMedicoComponent,
    AlertaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
