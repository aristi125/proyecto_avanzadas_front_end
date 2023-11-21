import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';



const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "editarPerfil", component: EditarPerfilComponent },
  { path: "listarCitasPendientes", component: ListarCitasPendientesComponent },
  { path: "atenderCitas", component: AtenderCitasComponent },
  { path: "listarCitasRealizadas", component: ListarCitasRealizadasComponent },
  { path: "agendarDiaLibre", component: AgendarDiaLibreComponent },
  { path: "crearCitaPaciente", component: CrearCitaPacienteComponent },
  { path: "crearPqrPaciente", component: CrearPqrPacienteComponent },
  { path: "filtrarMedicoFechaPaciente", component: FiltrarMedicoFechaPacienteComponent },
  { path: "inicioMedico", component: InicioMedicoComponent },
  { path: "inicioPaciente", component: InicioPacienteComponent },
  { path: "listarCita", component: ListarCitaComponent },
  { path: "listarPqrsPaciente", component: ListarPqrsPacienteComponent },
  { path: "recuperarContrasena", component: RecuperarContrasenaComponent },
  { path: "verDetalleCita/:codigo", component: VerDetalleCitaComponent },
  { path: "verDetallePqrPaciente/:codigo", component: VerDetallePqrPacienteComponent },
  { path: "listarCitasPendientesMedico", component: ListarCitasPendientesMedicoComponent },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },
  {
    path: "listar-pqrs/:codigo", component: ListarPqrsPacienteComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["paciente"]
    }
  },
  {
    path: "crear-pqrs", component: CrearPqrPacienteComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["paciente"]
    }
  },
  {
    path: "ver-detalle-pqrs/:codigo", component: VerDetallePqrPacienteComponent, canActivate: [RolesGuard],
    data: { expectedRole: ["paciente", "admin"] }
  },
 
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
