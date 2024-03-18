import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilhoComponent } from './components/filho/filho.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyProject';
  informacao?: string;
  informacaoDoFilho?: string;

  getInformacao(): void {
    this.informacao = 'Informação do pai para o filho';
  }

  recebeInformacaoDoFilho(event: string): void {
    this.informacaoDoFilho = event;
  }
}
