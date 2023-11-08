import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { PqrsComponent } from './pagina/pqrs/pqrs.component';
import { CitasComponent } from './pagina/citas/citas.component';
import { EditarPerfilComponent } from './pagina/editar-perfil/editar-perfil.component';
import { ListarCitasPendientesComponent } from './pagina/listar-citas-pendientes/listar-citas-pendientes.component';
import { AtenderCitasComponent } from './pagina/atender-citas/atender-citas.component';
import { ListarCitasRealizadasComponent } from './pagina/listar-citas-realizadas/listar-citas-realizadas.component';
import { AgendarDiaLibreComponent } from './pagina/agendar-dia-libre/agendar-dia-libre.component';


const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "pqrs", component: PqrsComponent},
  { path: "citas", component: CitasComponent},
  { path: "editarPerdil", component: EditarPerfilComponent},
  { path: "listarCitasPendientes", component: ListarCitasPendientesComponent},
  { path: "atenderCitas", component: AtenderCitasComponent},
  { path: "listarCitasRealizadas", component: ListarCitasRealizadasComponent},
  { path: "agendarDiaLibre", component: AgendarDiaLibreComponent},
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
