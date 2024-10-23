import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //BrowserModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'hospeda-belem';

  listaCasas = [
    {
      id: 1,
      endereco: 'Av. Joao Paulo',
      telefone: '(91) 955522222'
    },
    {
      id: 2,
      endereco: 'Passagem União',
      telefone: '(91) 92582515'
    }
  ];
}
