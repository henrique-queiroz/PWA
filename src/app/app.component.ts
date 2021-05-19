import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/folder/Inbox', icon: 'home' },
    { title: 'Sobre', url: 'para-instituicoes', icon: 'clipboard' },
    { title: 'Filiação', url: 'perfil', icon: 'school' },
    { title: 'Entrar', url: 'pesquisa', icon: 'school' },
    { title: 'Criar Conta', url: 'pesquisa', icon: 'school' },
  ];
  public labels = ['Entrar', 'Criar Conta'];
  constructor() {}
}
