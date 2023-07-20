import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { InformacionComponent } from './pages/informacion/informacion.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'pagos',
        component: PagosComponent
      },
      {
        path: 'informacion',
        component: InformacionComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
