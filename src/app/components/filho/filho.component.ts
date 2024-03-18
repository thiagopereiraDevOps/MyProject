import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filho',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent {

  @Input() recebeInformacaoDoPai?: string;
  @Output() enviaInformacaoParaOPai = new EventEmitter<string>();

  disparaInformacaoParaOPai(): void {
    this.enviaInformacaoParaOPai.emit('Envia informaçao para o pai');
  }
}
