import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-avatar',
  templateUrl: './card-avatar.component.html',
  styleUrls: ['./card-avatar.component.css']
})
export class CardAvatarComponent implements OnInit {

  public imagem = 'https://media.alienwarearena.com/media/Witcher-3-Wild-Hunt-The-avatar-03.jpg';
  public exibe = null;
  public descricao = 'Disciplinas de Programação';
  public usuario = 'Cláudio Montenegro';
  public profissao = 'Aluno';
  public lista = [

    {
      id: '1',
      year: '2007',
      cert: 'Alura'
    },
    
    {
      id: '2',
      year: '2007',
      cert: 'Udemy'
    },
    
    {
      id: '3',
      year: '2007',
      cert: 'Devmedia'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

  public exibePerfil() {
    this.exibe = true;
  }
  public ocultaPerfil() {
    this.exibe = false;
  }

}

