import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public jogo1!: string;
  public jogo2!: string;
  public jogo3!: string;
  public desc_jogo1!: string;
  public desc_jogo2!: string;
  public desc_jogo3!: string;

  constructor() { }

  ngOnInit() {
    this.jogo1! = 'It Takes Two';
    this.jogo2! = 'Sonic The Hedghog';
    this.jogo3! = 'Twisted Metal';
    this.desc_jogo1 = 'Cooperativo; Plataforma; Quebra-cabeça.';
    this.desc_jogo2 = 'Ação-aventura; Plataforma; Casual.';
    this.desc_jogo3 = 'Corrida; Combate veicular; Ação.';
  }
}
