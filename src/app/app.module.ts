import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    InicioComponent,
    FooterComponent,
    ProductosComponent,
    AgendarCitaComponent,
    QuienesSomosComponent,
    ContactenosComponent,
    LoginComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
