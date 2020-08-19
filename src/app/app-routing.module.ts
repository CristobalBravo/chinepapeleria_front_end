import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { LapizComponent } from './componentes/productos/lapiz/lapiz.component';
import { FlashcardComponent } from './componentes/flashcard/flashcard.component';
import { CrearProductoComponent } from './componentes/productos/crear-producto/crear-producto.component';
import { CrearUsuarioComponent } from './componentes/usuario/crear-usuario/crear-usuario.component';
import { PerfilComponent } from './componentes/Perfil/perfil/perfil.component';
import { CrearFlashCardComponent } from './componentes/productos/FlashCard/crear-flash-card/crear-flash-card.component';
import { DisenarComponent } from './componentes/flashcard/disenar/disenar.component';

import { AuthGuard } from './guards/auth.guard';
import { CrearLapizComponent } from './componentes/productos/lapiz/crear-lapiz/crear-lapiz.component';
import { DetalleLapizComponent } from './componentes/productos/lapiz/detalle-lapiz/detalle-lapiz.component';
import { ConfiguracionComponent } from './componentes/usuario/configuracion/configuracion.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';
import { PlanificadorComponent } from './componentes/productos/planificador/planificador.component';
import { ListarPlanificadorComponent } from './componentes/productos/planificador/listar-planificador/listar-planificador.component';
import { DisenarPlanificadorComponent } from './componentes/productos/planificador/disenar/disenar-planificador/disenar-planificador.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'lapiz', component: LapizComponent},
  {path: 'flashcard', component: FlashcardComponent},
  {path: 'planificador/crear', component: PlanificadorComponent},
  {path: 'planificador', component: ListarPlanificadorComponent},
  {path: 'flashcard/diseñar/:id', component: DisenarComponent},
  {path: 'planificador/diseñar/:id', component: DisenarPlanificadorComponent},
  {path: 'registrar', component: CrearUsuarioComponent},
  {path: 'producto/crear', component: CrearProductoComponent, canActivate: [AuthGuard]},
  {path: 'configuracion/flashcard/crear', component: CrearFlashCardComponent, canActivate: [AuthGuard]},
  {path: 'perfil', component: PerfilComponent , canActivate: [AuthGuard]},
  {path: 'configuracion/lapiz/crear', component: CrearLapizComponent, canActivate: [AuthGuard]},
  {path: 'detalle/:id', component: DetalleLapizComponent},
  {path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuard]},
  {path: 'pedido/detalle', component: PedidoComponent , canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
