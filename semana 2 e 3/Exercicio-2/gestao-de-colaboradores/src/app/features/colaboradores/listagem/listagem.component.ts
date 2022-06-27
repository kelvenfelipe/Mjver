import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  colaborador = {
    id: 7,
    nome: "kelven",
    salario: 4500,
    cargo: "dev jr"
  }

  title = "qualquer coisa"

  constructor() { }

  ngOnInit(): void {
  }

}
