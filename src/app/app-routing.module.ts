import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { LoginComponent } from './components/login/login.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {path: '', component : InicioComponent},
  {path : 'inicio', component: InicioComponent},
  {path : 'productos', component: ProductosComponent},
  {path : 'agendar-cita', component: AgendarCitaComponent},
  {path : 'contactenos', component: ContactenosComponent},
  {path : 'admin', component: LoginComponent},
  {path : 'quienes-somos', component: QuienesSomosComponent},
  {path : 'producto/:id', component: QuienesSomosComponent},
  {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
