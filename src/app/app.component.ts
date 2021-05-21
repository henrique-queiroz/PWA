import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appChamadas = [
    { title: 'Início', url: '/folder/Inbox', icon: 'home' },
    { title: 'Sobre', url: 'para-instituicoes', icon: 'clipboard' },
    { title: 'Filiação', url: 'perfil', icon: 'people' },
  ];
  public appCadastro = [
    { title: 'Entrar', url: '/acesso/login/login.module', icon: 'enter' },
    { title: 'Criar Conta', url: '/acesso/cadastro-cliente/cadastro-cliente.module', icon: 'add-circle' },
  ];
  constructor() {}
}
