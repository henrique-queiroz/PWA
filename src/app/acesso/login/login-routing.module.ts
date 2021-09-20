import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
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
    path: 'cadastro-cliente',
    loadChildren: () => import('../../acesso/cadastro-cliente/cadastro-cliente.module').then( m => m.CadastroClientePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
