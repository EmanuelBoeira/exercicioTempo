import { Component, OnInit } from '@angular/core';
import { ITempoAtual } from '../itempo-atual';

@Component({
  selector: 'app-tempo-atual',
  templateUrl: './tempo-atual.component.html',
  styleUrls: ['./tempo-atual.component.css']
})
export class TempoAtualComponent implements OnInit {

  ngOnInit(): void {
  }

  tempoAtual: ITempoAtual
  constructor() {
    this.tempoAtual = {
      cidade: 'Lages',
      pais: 'Brasil',
      data: new Date('18/05/2022'),
      descricao: 'Frio com ventos fortes',
      temperatura: -20,
      imagem: 'assets/img/frio.jpg',
    }
  }
}
