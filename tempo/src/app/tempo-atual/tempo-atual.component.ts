import { Component, OnInit } from '@angular/core';
import { ITempoAtual } from '../itempo-atual';
import { TempoService } from '../tempo/tempo.service';

@Component({
  selector: 'app-tempo-atual',
  templateUrl: './tempo-atual.component.html',
  styleUrls: ['./tempo-atual.component.css']
})
export class TempoAtualComponent implements OnInit {

  ngOnInit(): void {
    this.tempoService.getCurrentWeather('Lages', 'Brasil').subscribe((data) => this.tempoAtual = data)
  }

  tempoAtual: ITempoAtual
  constructor(private tempoService: TempoService) {
    this.tempoAtual = {
      cidade: 'Lages',
      pais: 'Brasil',
      date: '18/05/2022',
      descricao: 'Frio com ventos fortes',
      temperatura: -20,
      imagem: 'assets/img/frio.jpg',
    }
  }
}
