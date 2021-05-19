import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  }/*,
  {
    path: 'cadastro-cliente',
    loadChildren: () => import('../../acesso/cadastro-cliente/cadastro-cliente.module').then( m => m.CadastroClientePageModule)
  }*/,
  {
    path: 'home-page',
    loadChildren: () => import('../../sistema/home-page/home-page.module').then( m => m.HomePagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
