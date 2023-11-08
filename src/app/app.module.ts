import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { PqrsComponent } from './pagina/pqrs/pqrs.component';
import { EditarPerfilComponent } from './pagina/editar-perfil/editar-perfil.component';
import { CitasComponent } from './pagina/citas/citas.component';
import { ListarCitasPendientesComponent } from './pagina/listar-citas-pendientes/listar-citas-pendientes.component';
import { AtenderCitasComponent } from './pagina/atender-citas/atender-citas.component';
import { ListarCitasRealizadasComponent } from './pagina/listar-citas-realizadas/listar-citas-realizadas.component';
import { AgendarDiaLibreComponent } from './pagina/agendar-dia-libre/agendar-dia-libre.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    PqrsComponent,
    EditarPerfilComponent,
    CitasComponent,
    ListarCitasPendientesComponent,
    AtenderCitasComponent,
    ListarCitasRealizadasComponent,
    AgendarDiaLibreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
