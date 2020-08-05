import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { LapizComponent } from './componentes/productos/lapiz/lapiz.component';
import { FlashcardComponent } from './componentes/flashcard/flashcard.component';
import { CrearUsuarioComponent } from './componentes/usuario/crear-usuario/crear-usuario.component';
import { PerfilComponent } from './componentes/Perfil/perfil/perfil.component';
import { CrearLapizComponent } from './componentes/productos/lapiz/crear-lapiz/crear-lapiz.component';

import { CrearProductoComponent } from './componentes/productos/crear-producto/crear-producto.component';
import { CrearFlashCardComponent } from './componentes/productos/FlashCard/crear-flash-card/crear-flash-card.component';
import { DisenarComponent } from './componentes/flashcard/disenar/disenar.component';
import { DetalleLapizComponent } from './componentes/productos/lapiz/detalle-lapiz/detalle-lapiz.component';
import { ConfiguracionComponent } from './componentes/usuario/configuracion/configuracion.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LapizComponent,
    FlashcardComponent,
    CrearUsuarioComponent,
    PerfilComponent,
    CrearProductoComponent,
    CrearFlashCardComponent,
    DisenarComponent,
    CrearLapizComponent,
    CrearProductoComponent,
    DetalleLapizComponent,
    ConfiguracionComponent,
    PedidoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
