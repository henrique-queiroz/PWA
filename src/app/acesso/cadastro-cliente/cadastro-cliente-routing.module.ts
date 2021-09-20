import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroClientePage } from './cadastro-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroClientePage
  },
  {
    path: 'home',
    loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('../../sistema/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../../acesso/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroClientePageRoutingModule {}
