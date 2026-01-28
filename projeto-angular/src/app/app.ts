import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './cabecalho/cabecalho';
import { Rodape } from './rodape/rodape';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Aumiau Store';

  produtos = [
    {nome: "Ração para Gatos", preco: 120.50}
  ]
}