import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  resposta_1: boolean = true;
  resposta_2: boolean = true;
  resposta_3: boolean = true;
  icone_1: String = 'chevron-down';
  icone_2: String = 'chevron-down';
  icone_3: String = 'chevron-down';
  constructor() {}

  abrir_1() {
    if(this.resposta_1){
      this.resposta_1 = false;
      this.icone_1 = 'chevron-up';
    }else{
      this.resposta_1 = true;
      this.icone_1 = 'chevron-down';
    }
  }

  abrir_2() {
    if(this. resposta_2){
      this. resposta_2 = false;
      this.icone_2 = 'chevron-up';
    }else{
      this. resposta_2 = true;
      this.icone_2 = 'chevron-down';
    }
  }
  
  abrir_3() {
    if(this.resposta_3){
      this.resposta_3 = false;
      this.icone_3 = 'chevron-up';
    }else{
      this.resposta_3 = true;
      this.icone_3 = 'chevron-down';
    }
  }

}
