import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroClientePage } from './cadastro-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroClientePage,
  },
  {
    path: 'login',
    loadChildren: () => import('../../acesso/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('../../sistema/home-page/home-page.module').then( m => m.HomePagePageModule)
  }/*,
  {
    path: 'home',
    loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroClientePageRoutingModule {}
